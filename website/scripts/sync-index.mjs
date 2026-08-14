import { execFile } from "node:child_process";
import { access, copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import path from "node:path";

const execFileAsync = promisify(execFile);

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
const growthDestination = path.resolve(destinationDirectory, "library-growth.json");
const repositoryDirectory = path.resolve(siteDirectory, "..");
const repositorySource = "index/bibliography_and_access_status.json";

await mkdir(destinationDirectory, { recursive: true });

try {
  await access(source);
  await copyFile(source, destination);
  console.log("Synced bibliography from the repository index.");
} catch {
  await access(destination);
  console.log("Using the bundled bibliography because the parent index is unavailable.");
}

const currentRecords = JSON.parse(await readFile(destination, "utf8"));
const currentChecksums = new Set(currentRecords.map((record) => record.sha256));
const currentMonth = new Date().toISOString().slice(0, 7);

async function readExistingGrowth() {
  try {
    const existing = JSON.parse(await readFile(growthDestination, "utf8"));
    return existing.records && typeof existing.records === "object"
      ? existing.records
      : {};
  } catch {
    return {};
  }
}

async function growthFromGitHistory() {
  const { stdout: shallowOutput } = await execFileAsync(
    "git",
    ["rev-parse", "--is-shallow-repository"],
    { cwd: repositoryDirectory },
  );

  if (shallowOutput.trim() === "true") return null;

  const { stdout } = await execFileAsync(
    "git",
    ["log", "--format=%H%x09%cs", "--reverse", "--", repositorySource],
    { cwd: repositoryDirectory, maxBuffer: 1024 * 1024 },
  );

  const additions = {};

  for (const line of stdout.trim().split("\n").filter(Boolean)) {
    const [commit, date] = line.split("\t");
    const { stdout: snapshot } = await execFileAsync(
      "git",
      ["show", `${commit}:${repositorySource}`],
      { cwd: repositoryDirectory, maxBuffer: 16 * 1024 * 1024 },
    );
    const records = JSON.parse(snapshot);

    for (const record of records) {
      if (currentChecksums.has(record.sha256) && !additions[record.sha256]) {
        additions[record.sha256] = date.slice(0, 7);
      }
    }
  }

  return additions;
}

let recordAdditions;

try {
  recordAdditions = await growthFromGitHistory();
} catch {
  recordAdditions = null;
}

if (!recordAdditions) {
  const existing = await readExistingGrowth();
  recordAdditions = Object.fromEntries(
    Object.entries(existing).filter(([checksum]) => currentChecksums.has(checksum)),
  );
}

for (const checksum of currentChecksums) {
  recordAdditions[checksum] ??= currentMonth;
}

await writeFile(
  growthDestination,
  `${JSON.stringify(
    {
      generatedAt: new Date().toISOString().slice(0, 10),
      records: Object.fromEntries(Object.entries(recordAdditions).sort()),
    },
    null,
    2,
  )}\n`,
);

console.log("Synced monthly library growth from the repository history.");
