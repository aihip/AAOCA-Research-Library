import { access, copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const siteDirectory = path.resolve(scriptDirectory, "..");
const source = path.resolve(
  siteDirectory,
  "..",
  "index",
  "bibliography_and_access_status.json",
);
const destinationDirectory = path.resolve(siteDirectory, "data");
const destination = path.resolve(destinationDirectory, "papers.json");

await mkdir(destinationDirectory, { recursive: true });

try {
  await access(source);
  await copyFile(source, destination);
  console.log("Synced bibliography from the repository index.");
} catch {
  await access(destination);
  console.log("Using the bundled bibliography because the parent index is unavailable.");
}
