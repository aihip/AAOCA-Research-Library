import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const records = JSON.parse(
  await readFile(new URL("../data/papers.json", import.meta.url), "utf8"),
);

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

test("server-renders the bilingual searchable library", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AAOCA Research Library/);
  assert.match(html, /冠状动脉起源异常/);
  assert.match(html, /A bilingual index for pediatric and adult AAOCA literature/);
  assert.match(html, /没有用摘要冒充论文/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /bibliography_and_access_status\.json/);
  assert.match(html, /https:\/\/aaoca\.pheth\.com/);
  assert.doesNotMatch(html, /aaoca-research-library\.huusondo988\.chatgpt\.site/);
  assert.doesNotMatch(html, /react-loading-skeleton|Your site is taking shape/);
});

test("renders a non-full-text record with a prominent warning and identifiers", async () => {
  const paper = records.find((record) => !record.access.startsWith("全文"));
  const slug = `${paper.year}-${paper.sha256.slice(0, 12)}`;
  const response = await render(`/papers/${slug}`);
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, new RegExp(paper.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(html, /非全文 \/ NOT FULL TEXT/);
  assert.match(html, /does not present an abstract as the paper/);
  assert.match(html, /Persistent identifiers/);
  assert.match(html, /Repository provenance/);
  assert.ok(
    html.includes(
      `https://github.com/aihip/AAOCA-Research-Library/blob/main/${paper.path}`,
    ),
  );
});

test("publishes a canonical sitemap and robots policy for all record pages", async () => {
  const sitemapResponse = await render("/sitemap.xml", "application/xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 64);
  assert.match(
    sitemap,
    /https:\/\/aaoca\.pheth\.com\/papers\//,
  );
  assert.doesNotMatch(sitemap, /chatgpt\.site|sites\.openai\.com/);

  const robotsResponse = await render("/robots.txt", "text/plain");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow: \//);
  assert.match(
    robots,
    /Sitemap: https:\/\/aaoca\.pheth\.com\/sitemap\.xml/,
  );
});
