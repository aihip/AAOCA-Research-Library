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

await writeRendered("/", await render("/"));
for (const paper of papers) {
  await writeRendered(`/papers/${paper.year}-${paper.sha256.slice(0, 12)}`, await render(`/papers/${paper.year}-${paper.sha256.slice(0, 12)}`));
}
await writeRendered("/robots.txt", await render("/robots.txt", "text/plain"));
await writeRendered("/sitemap.xml", await render("/sitemap.xml", "application/xml"));
await writeRendered("/manifest.webmanifest", await render("/manifest.webmanifest", "application/manifest+json"));

console.log(`Exported ${papers.length + 1} HTML routes plus SEO metadata to dist/client.`);
