import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(scriptDir, "..");
const clientRoot = resolve(siteRoot, "dist/client");
const dataPath = resolve(siteRoot, "data/papers.json");
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("static", createHash("sha1").update(String(Date.now())).digest("hex"));

const { default: worker } = await import(workerUrl.href);
const papers = JSON.parse(await readFile(dataPath, "utf8"));

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

async function fetchAsset(request) {
  const url = new URL(request.url);
  const relativePath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const assetPath = resolve(clientRoot, relativePath);
  if (assetPath !== clientRoot && !assetPath.startsWith(`${clientRoot}${sep}`)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const body = await readFile(assetPath);
    return new Response(body, {
      headers: { "content-type": mimeTypes[extname(assetPath)] ?? "application/octet-stream" },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

async function render(pathname, accept = "text/html") {
  const response = await worker.fetch(
    new Request(`https://aaoca.pheth.com${pathname}`, { headers: { accept } }),
    { ASSETS: { fetch: fetchAsset } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`${pathname} rendered with HTTP ${response.status}`);
  return response;
}

async function writeRendered(pathname, response) {
  const cleanPath = pathname.replace(/^\/+/, "");
  const relativePath = pathname === "/"
    ? "index.html"
    : pathname === "/sitemap.xml"
      ? `${cleanPath}/index.html`
      : extname(pathname)
        ? cleanPath
        : `${cleanPath}/index.html`;
  const outputPath = resolve(clientRoot, relativePath);
  await mkdir(dirname(outputPath), { recursive: true });
  const body = await response.text();
  await writeFile(outputPath, body);
}

const TOPIC_SLUGS = [
  "what-is-it",
  "how-serious",
  "what-tests",
  "sports",
  "surgery",
  "guidelines",
];

// Chinese lives at the root, English under /en. Both trees are exported in full.
const LANGUAGE_PREFIXES = ["", "/en"];

const pagePaths = LANGUAGE_PREFIXES.flatMap((prefix) => [
  prefix || "/",
  `${prefix}/about`,
  ...TOPIC_SLUGS.map((slug) => `${prefix}/topics/${slug}`),
  ...papers.map(
    (paper) => `${prefix}/papers/${paper.year}-${paper.sha256.slice(0, 12)}`,
  ),
]);

for (const pathname of pagePaths) {
  await writeRendered(pathname, await render(pathname));
}

await writeRendered("/robots.txt", await render("/robots.txt", "text/plain"));
await writeRendered("/sitemap.xml", await render("/sitemap.xml", "application/xml"));
await writeRendered("/manifest.webmanifest", await render("/manifest.webmanifest", "application/manifest+json"));

// Without a 404.html, Cloudflare Pages answers any unmatched path — including a
// hashed asset that is momentarily missing mid-deploy — with index.html and a
// 200. Browsers then cache that HTML under the asset's `immutable, max-age=1y`
// header, the ES module import fails on a MIME mismatch, and the page never
// hydrates. A real 404 keeps a miss a miss.
await writeFile(
  resolve(clientRoot, "404.html"),
  `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>页面不存在 | Page not found</title>
<style>
:root{color-scheme:light}
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;
background:#f5f1e8;color:#142a2c;line-height:1.7;
font-family:"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Inter,ui-sans-serif,-apple-system,sans-serif}
main{max-width:34rem;text-align:center}
h1{margin:0 0 12px;font-size:1.6rem;font-weight:600}
p{margin:0 0 8px;color:#4d6060}
a{display:inline-block;margin-top:22px;padding:12px 20px;border-radius:8px;
background:#0d3437;color:#fffdf8;font-weight:700;text-decoration:none}
</style>
</head>
<body>
<main>
<h1>页面不存在</h1>
<p>这个地址没有对应的内容，可能是链接有误或页面已经调整。</p>
<p>This page does not exist.</p>
<a href="/">返回首页 / Back to home</a>
</main>
</body>
</html>
`,
  "utf8",
);

console.log(
  `Exported ${pagePaths.length} HTML routes plus SEO metadata and 404.html to dist/client.`,
);
