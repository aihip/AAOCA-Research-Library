import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const records = JSON.parse(
  await readFile(new URL("../data/papers.json", import.meta.url), "utf8"),
);

const plainLanguage = JSON.parse(
  await readFile(new URL("../data/plain-language.json", import.meta.url), "utf8"),
);

const synonyms = JSON.parse(
  await readFile(new URL("../lib/synonyms.json", import.meta.url), "utf8"),
);

const TOPIC_SLUGS = [
  "what-is-it",
  "how-serious",
  "what-tests",
  "sports",
  "surgery",
  "guidelines",
];

const CONSENSUS_PATTERN =
  /consensus|guideline|recommendations|scientific statement|专家共识|指南/i;

const slugFor = (paper) => `${paper.year}-${paper.sha256.slice(0, 12)}`;
const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

async function render(pathname = "/", accept = "text/html") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function renderHtml(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200, `${pathname} did not return 200`);
  return response.text();
}

test("bibliography remains complete, deduplicated, and access-safe", () => {
  const fullText = records.filter((paper) => paper.access.startsWith("全文"));
  const nonFullText = records.filter(
    (paper) => !paper.access.startsWith("全文"),
  );

  assert.equal(records.length, 63);
  assert.equal(
    records.filter((paper) => paper.category === "儿童").length,
    38,
  );
  assert.equal(
    records.filter((paper) => paper.category === "成人").length,
    25,
  );
  assert.equal(fullText.length, 31);
  assert.equal(nonFullText.length, 32);
  assert.equal(
    records.reduce((sum, paper) => sum + Number(paper.pages), 0),
    622,
  );
  assert.equal(new Set(records.map((paper) => paper.sha256)).size, 63);
  assert.equal(new Set(records.map((paper) => paper.path)).size, 63);

  for (const paper of nonFullText) {
    assert.match(paper.path, /NON_FULLTEXT/);
    assert.ok(
      paper.doi || paper.pmid || paper.pmcid || paper.entry_url,
      `Non-full-text record has no persistent source: ${paper.title}`,
    );
  }
});

test("plain-language overlay stays joined to the authoritative index", () => {
  const checksums = new Set(records.map((paper) => paper.sha256));
  const keys = Object.keys(plainLanguage);

  assert.equal(keys.length, 63, "every record needs a plain-language entry");

  for (const key of keys) {
    assert.ok(
      checksums.has(key),
      `plain-language.json key matches no record: ${key}`,
    );
  }

  for (const [key, entry] of Object.entries(plainLanguage)) {
    assert.ok(entry.summary_zh?.length > 10, `summary too short for ${key}`);
    assert.ok(
      Array.isArray(entry.topics) && entry.topics.length > 0,
      `no topics assigned for ${key}`,
    );
    for (const topic of entry.topics) {
      assert.ok(TOPIC_SLUGS.includes(topic), `unknown topic "${topic}" on ${key}`);
    }
    assert.equal(typeof entry.reviewed, "boolean");
  }

  // The one record whose original title is already Chinese needs no translation.
  const untranslated = Object.entries(plainLanguage).filter(
    ([, entry]) => !entry.title_zh,
  );
  assert.equal(untranslated.length, 1);
  const [chineseKey] = untranslated[0];
  const chineseRecord = records.find((paper) => paper.sha256 === chineseKey);
  assert.match(chineseRecord.title, /[一-鿿]/);
});

test("the guidelines topic matches the documented consensus records", () => {
  const byTitle = records
    .filter((paper) => CONSENSUS_PATTERN.test(paper.title))
    .map((paper) => paper.sha256)
    .sort();

  const byTopic = Object.entries(plainLanguage)
    .filter(([, entry]) => entry.topics.includes("guidelines"))
    .map(([key]) => key)
    .sort();

  assert.equal(byTitle.length, 8);
  assert.deepEqual(
    byTopic,
    byTitle,
    "the guidelines topic has drifted from the title-derived consensus set",
  );
});

test("Chinese landing page leads with plain language, not jargon", async () => {
  const html = await renderHtml("/");

  assert.match(html, /<html lang="zh-CN"/);
  assert.match(html, /冠状动脉起源异常/);
  assert.match(html, /不能替代医生的诊断和建议/);
  assert.match(html, /这是什么情况/);
  assert.match(html, /心脏自己也需要血液供应/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /https:\/\/aaoca\.pheth\.com/);

  // Every question is reachable from the landing page.
  for (const slug of TOPIC_SLUGS) {
    assert.ok(html.includes(`/topics/${slug}`), `landing page omits ${slug}`);
  }

  assert.doesNotMatch(html, /aaoca-research-library\.huusondo988\.chatgpt\.site/);
  assert.doesNotMatch(html, /react-loading-skeleton|Your site is taking shape/);
});

test("English tree renders independently with its own document language", async () => {
  const html = await renderHtml("/en");

  assert.match(html, /<html lang="en"/);
  assert.match(html, /AAOCA Research Library/);
  assert.match(html, /Anomalous aortic origin of a coronary artery/);
  assert.match(html, /does not replace medical diagnosis or advice/);

  // The English tree must not fall back to the Chinese primer.
  assert.doesNotMatch(html, /心脏自己也需要血液供应/);
});

test("both trees declare each other as hreflang alternates", async () => {
  const paths = ["/", "/topics/sports", `/papers/${slugFor(records[0])}`];

  for (const path of paths) {
    const zhHtml = await renderHtml(path);
    const enHtml = await renderHtml(`/en${path === "/" ? "" : path}`);
    const enUrl = `https://aaoca.pheth.com/en${path === "/" ? "" : path}`;
    const zhUrl = `https://aaoca.pheth.com${path}`;

    for (const html of [zhHtml, enHtml]) {
      assert.ok(html.includes(enUrl), `${path} is missing the en alternate`);
      assert.ok(html.includes(zhUrl), `${path} is missing the zh-CN alternate`);
    }
  }
});

test("every question page renders and none is empty", async () => {
  for (const slug of TOPIC_SLUGS) {
    const html = await renderHtml(`/topics/${slug}`);
    const cards = (html.match(/class="paper-card"/g) ?? []).length;

    assert.ok(cards > 0, `/topics/${slug} rendered no records`);

    const expected = Object.values(plainLanguage).filter((entry) =>
      entry.topics.includes(slug),
    ).length;
    assert.equal(cards, expected, `/topics/${slug} rendered ${cards} of ${expected}`);

    assert.match(html, /不能替代医生的诊断和建议/);
    assert.ok(await renderHtml(`/en/topics/${slug}`));
  }
});

test("every suggested query actually finds something", async () => {
  // Mirrors expandTerm(): exact key, else every Chinese key contained in the
  // token, because Chinese queries arrive as one compound word.
  const cjkKeys = Object.keys(synonyms).filter((key) => /[一-鿿]/.test(key));
  const expand = (term) => {
    const normalized = term.toLocaleLowerCase();
    const aliases = new Set([normalized]);
    const exact = synonyms[normalized];
    if (exact) {
      for (const alias of exact) aliases.add(alias.toLocaleLowerCase());
      return [...aliases];
    }
    for (const key of cjkKeys) {
      if (!normalized.includes(key)) continue;
      for (const alias of synonyms[key]) aliases.add(alias.toLocaleLowerCase());
    }
    return [...aliases];
  };

  // The runtime index also carries each record's topic labels, so take them
  // from the rendered question pages rather than duplicating them here.
  const topicQuestions = {};
  for (const slug of TOPIC_SLUGS) {
    const page = await renderHtml(`/topics/${slug}`);
    topicQuestions[slug] = /<h1[^>]*>(.*?)<\/h1>/s.exec(page)[1].trim();
  }

  const corpus = records
    .map((paper) => {
      const entry = plainLanguage[paper.sha256] ?? {};
      const population = paper.category === "儿童" ? "儿童 pediatric" : "成人 adult";
      return [
        paper.title,
        paper.journal,
        paper.notes,
        entry.title_zh,
        entry.summary_zh,
        population,
        ...(entry.topics ?? []).map((slug) => topicQuestions[slug]),
      ]
        .filter(Boolean)
        .join(" ");
    })
    .map((text) => text.toLocaleLowerCase());

  const html = await renderHtml("/");
  const suggestions = [
    ...html.matchAll(/<div class="search-suggestions">(.*?)<\/div>/gs),
  ]
    .flatMap((match) => [...match[1].matchAll(/<button[^>]*>(.*?)<\/button>/gs)])
    .map((match) => match[1].trim());

  assert.ok(suggestions.length >= 4, "landing page rendered no suggestion chips");

  for (const suggestion of suggestions) {
    // A suggestion is a promise to the reader; it must not lead to zero results.
    const terms = suggestion.split(/\s+/).filter(Boolean);
    const hits = corpus.filter((text) =>
      terms.every((term) => expand(term).some((alias) => text.includes(alias))),
    ).length;

    assert.ok(hits > 0, `suggested query "${suggestion}" matches no record`);
  }
});

test("unreviewed summaries are labelled as AI drafts", async () => {
  const drafted = Object.entries(plainLanguage).filter(
    ([, entry]) => entry.reviewed === false,
  );
  assert.ok(drafted.length > 0, "this test is meaningless once all are reviewed");

  const [checksum] = drafted[0];
  const paper = records.find((record) => record.sha256 === checksum);
  const html = await renderHtml(`/papers/${slugFor(paper)}`);

  assert.match(html, /AI 初稿/);
  assert.match(html, /尚未经过人工核对/);
});

test("renders a non-full-text record in plain words with usable identifiers", async () => {
  const paper = records.find((record) => !record.access.startsWith("全文"));
  const html = await renderHtml(`/papers/${slugFor(paper)}`);

  assert.match(html, new RegExp(escape(paper.title)));
  assert.match(html, /本站没有这篇的全文/);
  assert.match(html, /本站不会用摘要冒充论文/);
  // The actionable instruction is what makes a paywall survivable for a family.
  assert.match(html, /请医生、医院图书馆或大学图书馆代为调阅/);
  assert.match(html, /怎么找到这篇原文/);

  // Provenance is retained but collapsed behind a disclosure.
  assert.match(html, /<details class="provenance">/);
  assert.ok(
    html.includes(
      `https://github.com/aihip/AAOCA-Research-Library/blob/main/${paper.path}`,
    ),
  );
});

test("publishes a canonical sitemap and robots policy for both trees", async () => {
  const sitemapResponse = await render("/sitemap.xml", "application/xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();

  // (1 landing + 6 questions + 63 records) x 2 language trees.
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 140);
  assert.match(sitemap, /https:\/\/aaoca\.pheth\.com\/papers\//);
  assert.match(sitemap, /https:\/\/aaoca\.pheth\.com\/en\/papers\//);
  assert.match(sitemap, /https:\/\/aaoca\.pheth\.com\/topics\/sports/);
  assert.doesNotMatch(sitemap, /chatgpt\.site|sites\.openai\.com/);

  const robotsResponse = await render("/robots.txt", "text/plain");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/aaoca\.pheth\.com\/sitemap\.xml/);
});
