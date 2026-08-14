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

const ANALYSIS_INDEX_PATH = "/analysis";
const ANALYSIS_PATH = "/analysis/aaorca-evidence-20-studies";
const ANALYSIS_SLUGS = [
  "aaorca-repair-technique-anatomy",
  "aaorca-proximal-diameter-geometry",
  "aaorca-decision-model",
  "aaorca-anatomy-versus-physiology",
  "aaorca-evidence-20-studies",
];

const CONSENSUS_PATTERN =
  /consensus|guideline|recommendations|scientific statement|专家共识|指南/i;

const REQUIRED_TERMINOLOGY = {
  aaoca: "anomalous aortic origin of a coronary artery",
  aaorca: "anomalous aortic origin of the right coronary artery",
  "r-aaoca": "right coronary aaoca",
  acaos: "anomalous coronary artery from the opposite sinus",
  "r-acaos": "right coronary artery from opposite sinus",
  "壁内段": "intramural course",
  "主动脉-肺动脉间走行": "interarterial course",
  "裂隙样开口": "slit-like ostium",
  "锐角起源": "acute take-off angle",
  "去顶术": "unroofing",
  "冠脉再植": "coronary reimplantation",
  "肺动脉移位": "pulmonary artery translocation",
  "冠脉搭桥": "coronary artery bypass grafting",
};

const slugFor = (paper) => `${paper.year}-${paper.sha256.slice(0, 12)}`;
const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

test("the disease terminology list remains available to search", () => {
  for (const [term, expansion] of Object.entries(REQUIRED_TERMINOLOGY)) {
    assert.ok(synonyms[term], `${term} is missing from the search vocabulary`);
    assert.ok(
      synonyms[term].includes(expansion),
      `${term} does not expand to ${expansion}`,
    );
  }
});

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

  assert.equal(records.length, 87);
  assert.equal(
    records.filter((paper) => paper.category === "儿童").length,
    53,
  );
  assert.equal(
    records.filter((paper) => paper.category === "成人").length,
    34,
  );
  assert.equal(fullText.length, 49);
  assert.equal(nonFullText.length, 38);
  assert.equal(
    records.reduce((sum, paper) => sum + Number(paper.pages), 0),
    931,
  );
  assert.equal(new Set(records.map((paper) => paper.sha256)).size, 87);
  assert.equal(new Set(records.map((paper) => paper.path)).size, 87);

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

  assert.equal(keys.length, 87, "every record needs a plain-language entry");

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
    assert.ok(
      ["source", "metadata", "draft"].includes(entry.check),
      `unknown check state "${entry.check}" on ${key}`,
    );
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

  assert.equal(byTitle.length, 9);
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
  assert.match(html, /最新分析/);
  assert.ok(html.includes(ANALYSIS_PATH));
  assert.match(html, /更多分析/);

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
  const paths = ["/", ANALYSIS_PATH, "/topics/sports", `/papers/${slugFor(records[0])}`];

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

test("both trees resolve a fragment once without locking later scrolling", async () => {
  // The router can re-apply location.hash during hydration. Resolve the target
  // synchronously after the page markup, then clear the fragment without any
  // delayed scroll correction that could fight a wheel or touch gesture.
  for (const path of ["/", "/en", "/topics/sports", "/en/topics/sports"]) {
    const html = await renderHtml(path);
    assert.match(html, /window\.location\.hash/, `${path} has no scroll guard`);
    assert.match(html, /document\.getElementById/, `${path} never resolves its target`);
    assert.match(html, /target\.scrollIntoView\(\)/, `${path} never lands on its target`);
    assert.match(html, /history\.replaceState/, `${path} never clears the hash`);
    assert.doesNotMatch(html, /window\.scrollTo/);
    assert.doesNotMatch(html, /requestAnimationFrame/);
    assert.doesNotMatch(html, /setTimeout/);
    assert.doesNotMatch(html, /addEventListener\("scroll"/);
  }
});

test("every internal fragment link points to an element on its destination page", async () => {
  const samplePaper = `/papers/${slugFor(records[0])}`;
  const paths = [
    "/",
    "/en",
    "/topics/sports",
    "/en/topics/sports",
    samplePaper,
    `/en${samplePaper}`,
  ];
  const rendered = new Map();

  for (const path of paths) {
    const html = await renderHtml(path);
    const hrefs = [...html.matchAll(/href="([^"]*#[^"]+)"/g)].map(
      (match) => match[1],
    );

    for (const href of hrefs) {
      const url = new URL(href, `https://aaoca.pheth.com${path}`);
      if (url.origin !== "https://aaoca.pheth.com") continue;

      const destination = url.pathname === "/en/" ? "/en" : url.pathname;
      if (!rendered.has(destination)) {
        rendered.set(destination, await renderHtml(destination));
      }

      const id = decodeURIComponent(url.hash.slice(1));
      assert.ok(
        rendered.get(destination).includes(`id="${id}"`),
        `${path} links to missing fragment ${url.pathname}${url.hash}`,
      );
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

/**
 * Every check is performed by AI. The badges must never let a reader conclude
 * that a person vouched for a summary, so each one carries "AI" and disclaims
 * professional involvement outright.
 */
const CHECK_BADGES = {
  source: "AI 已校对原文",
  metadata: "AI 仅据题录",
  draft: "AI 初稿未校",
};

test("every summary states how far it was checked", async () => {
  const states = new Set(
    Object.values(plainLanguage).map((entry) => entry.check),
  );

  for (const state of states) {
    const [checksum] = Object.entries(plainLanguage).find(
      ([, entry]) => entry.check === state,
    );
    const paper = records.find((record) => record.sha256 === checksum);
    const html = await renderHtml(`/papers/${slugFor(paper)}`);

    assert.match(html, new RegExp(CHECK_BADGES[state]));
    assert.match(html, /没有医学专业人士参与/);
    // "尚未" would promise a human review that is never coming.
    assert.doesNotMatch(html, /人工核对/);
  }
});

test("hand-written medical prose points at the consensus it rests on", async () => {
  const home = await renderHtml("/");
  assert.match(home, /source-list/, "the primer cites nothing");
  // The risk figures in the primer come from these two consensus documents.
  assert.match(home, /href="\/papers\/2020-8bcae4884a2a\/"/);
  assert.match(home, /href="\/papers\/2017-eef7d139c8b6\/"/);
  // Both consensus documents stress that sudden death is often the first sign,
  // so the primer must not leave a family reassured by an absence of symptoms.
  assert.match(home, /没有症状不等于没有风险/);

  for (const slug of TOPIC_SLUGS) {
    const html = await renderHtml(`/topics/${slug}`);
    assert.match(html, /source-list/, `/topics/${slug} cites nothing`);
  }
});

test("every cited source resolves to a record held here in full", async () => {
  // Read from the module source rather than restating the slugs, so a citation
  // edited in lib/topics.ts cannot drift past this check.
  const topicsSource = await readFile(
    new URL("../lib/topics.ts", import.meta.url),
    "utf8",
  );
  const cited = new Set(
    (topicsSource.match(/"\d{4}-[0-9a-f]{12}"/g) ?? []).map((quoted) =>
      quoted.slice(1, -1),
    ),
  );
  assert.ok(cited.size >= 5, "no citations found in lib/topics.ts");

  for (const slug of cited) {
    const paper = records.find((record) => slugFor(record) === slug);
    assert.ok(paper, `cited source ${slug} matches no record`);
    // A citation the reader cannot open is not a citation.
    assert.ok(
      paper.access.startsWith("全文"),
      `cited source ${slug} has no full text here`,
    );
  }
});

test("the about page says who compiled this and that no clinician checked it", async () => {
  const zhHtml = await renderHtml("/about");
  assert.match(zhHtml, /患者家属/);
  assert.match(zhHtml, /我不是医生/);
  assert.match(zhHtml, /没有医学专业人士参与/);
  // The scope limit matters as much as the credentials.
  assert.match(zhHtml, /这不是一份系统综述/);

  const enHtml = await renderHtml("/en/about");
  assert.match(enHtml, /not a doctor/);
  assert.match(enHtml, /No medical professional was involved/);

  // Reachable from the nav on every page rather than buried in the footer.
  for (const path of ["/", "/topics/sports"]) {
    assert.match(await renderHtml(path), /href="\/about\/"/);
  }
});

test("the evidence analysis keeps unlike study designs separate and traceable", async () => {
  const zhHtml = await renderHtml(ANALYSIS_PATH);
  assert.match(zhHtml, /把病例数、手术比例、术式和随访真正摊平/);
  assert.match(zhHtml, /真实世界队列问/);
  assert.match(zhHtml, /手术系列问/);
  assert.match(zhHtml, /腺苷 FFR 异常/);
  assert.match(zhHtml, /多巴酚丁胺 FFR 异常/);
  assert.match(zhHtml, /13 人 \/ 15 次/);
  assert.match(zhHtml, /没有医学专业人士审阅/);
  assert.match(zhHtml, /\/figures\/aaoca-unroofing-technical\.jpg/);
  assert.match(zhHtml, /\/figures\/aaorca-reimplantation-technical\.jpg/);
  assert.match(zhHtml, /探针定位壁内段/);
  assert.match(zhHtml, /切取冠脉纽扣/);
  assert.match(zhHtml, /CC BY 4\.0/);
  assert.match(zhHtml, /pmc\.ncbi\.nlm\.nih\.gov\/articles\/PMC8149602/);
  assert.match(zhHtml, /data-label="壁内段\/近端解剖"/);
  assert.match(zhHtml, /data-label="死亡\/缺血\/再干预"/);
  assert.ok((zhHtml.match(/href="\/papers\//g) ?? []).length >= 16);

  const enHtml = await renderHtml(`/en${ANALYSIS_PATH}`);
  assert.match(enHtml, /patient counts, operation rates, techniques, and follow-up side by side/);
  assert.match(enHtml, /No medical professional reviewed it/);
  assert.match(enHtml, /data-label="Intramural\/proximal anatomy"/);
});

test("every analysis is reachable, dated, and traceable to library records", async () => {
  const indexHtml = await renderHtml(ANALYSIS_INDEX_PATH);
  for (const slug of ANALYSIS_SLUGS) {
    assert.ok(indexHtml.includes(`/analysis/${slug}`), `index omits ${slug}`);
  }

  for (const slug of ANALYSIS_SLUGS) {
    for (const prefix of ["", "/en"]) {
      const html = await renderHtml(`${prefix}/analysis/${slug}`);

      // Every analysis states that no clinician checked it.
      assert.match(html, prefix === "" ? /没有医学专业人士审阅/ : /No medical professional reviewed it/);
      // ...carries a machine-readable publication date...
      assert.match(html, /dateTime="20\d\d-\d\d-\d\d"/);
      // ...and sends the reader back to the records it rests on.
      assert.ok(
        (html.match(/href="[^"]*\/papers\//g) ?? []).length >= 7,
        `${prefix}/analysis/${slug} cites too few records`,
      );
    }
  }
});

test("record lists carry the summary notice in body text, not only a tooltip", async () => {
  for (const path of ["/", "/topics/how-serious"]) {
    const html = await renderHtml(path);
    assert.match(html, /summary-notice/);
    assert.match(html, /也由 AI 校对/);
  }
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

test("canonical URLs, alternates, and internal links resolve without a redirect", async () => {
  // Pages are exported as <path>/index.html and the host 308s the slashless
  // form, so anything we publish must already carry the slash. A canonical
  // pointing at a redirect is the one thing crawlers should never be handed.
  const sitemap = await (await render("/sitemap.xml", "application/xml")).text();
  for (const loc of sitemap.match(/<loc>[^<]*<\/loc>/g) ?? []) {
    const url = loc.replace(/<\/?loc>/g, "");
    assert.match(url, /\/$/, `sitemap entry is not slash-terminated: ${url}`);
  }

  const paths = ["/", "/en", "/about", ANALYSIS_INDEX_PATH, "/topics/sports", `/papers/${slugFor(records[0])}`];
  for (const path of paths) {
    const html = await renderHtml(path);

    for (const tag of html.match(/<link rel="(?:canonical|alternate)"[^>]*>/g) ?? []) {
      const url = tag.match(/href="([^"]+)"/)?.[1];
      assert.match(url, /\/$/, `${path} publishes a redirecting URL: ${url}`);
    }

    // Internal links, ignoring pure fragments and fragment-bearing hrefs.
    for (const link of html.match(/href="\/[^"#]*"/g) ?? []) {
      const url = link.slice(6, -1);
      if (url.startsWith("/assets/") || /\.[a-z0-9]+$/i.test(url)) continue;
      assert.match(url, /\/$/, `${path} links to a redirecting URL: ${url}`);
    }
  }
});

test("publishes a canonical sitemap and robots policy for both trees", async () => {
  const sitemapResponse = await render("/sitemap.xml", "application/xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();

  // (landing + about + analysis index + one per analysis + one per question
  // + one per record) x 2 trees.
  const perTree = 3 + ANALYSIS_SLUGS.length + TOPIC_SLUGS.length + records.length;
  assert.equal((sitemap.match(/<url>/g) ?? []).length, perTree * 2);
  assert.match(sitemap, /https:\/\/aaoca\.pheth\.com\/papers\//);
  assert.match(sitemap, /https:\/\/aaoca\.pheth\.com\/en\/papers\//);
  assert.match(sitemap, /https:\/\/aaoca\.pheth\.com\/topics\/sports/);
  assert.match(sitemap, /https:\/\/aaoca\.pheth\.com\/about/);
  assert.match(sitemap, /https:\/\/aaoca\.pheth\.com\/en\/about/);
  assert.match(sitemap, /https:\/\/aaoca\.pheth\.com\/analysis\/aaorca-evidence-20-studies/);
  assert.doesNotMatch(sitemap, /chatgpt\.site|sites\.openai\.com/);

  const robotsResponse = await render("/robots.txt", "text/plain");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/aaoca\.pheth\.com\/sitemap\.xml/);
});
