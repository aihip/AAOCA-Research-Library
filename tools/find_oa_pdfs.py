#!/usr/bin/env python3
"""Discover free, legal open-access PDFs for the non-fulltext papers.

For every record whose access is "非全文" we ask two legitimate OA sources:
  1. Unpaywall  (https://api.unpaywall.org)  — needs an email contact
  2. Europe PMC (https://www.ebi.ac.uk/europepmc/webservices/rest)

We print one machine-readable TSV line per candidate PDF URL so the caller can
decide what to download. Nothing is downloaded here.

Usage: python3 tools/find_oa_pdfs.py [bibliography.csv] > out.tsv
"""
from __future__ import annotations

import csv
import json
import sys
import urllib.parse
import urllib.request

EMAIL = "aaoca-library@example.org"
UA = "Mozilla/5.0 (compatible; AAOCA-library-bot/1.0; +open-access-curation)"
TIMEOUT = 25

# Hosts that serve a real article PDF we are allowed to archive.
ALLOWED_HOST_FRAGMENTS = (
    "pmc.ncbi.nlm.nih.gov",
    "europepmc.org",
    "ncbi.nlm.nih.gov",
    "doi.org",
    "arxiv.org",
    "biomedcentral.com",
    "springer.com",   # open-access Springer articles serve a /content/pdf URL
    "frontiersin.org",
    "mdpi.com",
    "wiley.com",
    "ahajournals.org",
    "thoracickey.com",
    "jtcvs.org",
    "sciencedirect.com",
    "researchsquare.com",
    "pmc",            # broad safety net
)


def fetch(url: str) -> str | None:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
            return resp.read().decode("utf-8", "replace")
    except Exception as exc:  # noqa: BLE001
        sys.stderr.write(f"  fetch error {url}: {exc}\n")
        return None


def unpaywall_urls(doi: str) -> list[tuple[str, str]]:
    raw = fetch(f"https://api.unpaywall.org/v2/{urllib.parse.quote(doi)}?email={EMAIL}")
    if not raw:
        return []
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        return []
    out: list[tuple[str, str]] = []
    for loc in data.get("oa_locations") or []:
        for key in ("url_for_pdf", "url"):
            u = loc.get(key)
            host = loc.get("host_type", "")
            version = loc.get("version", "")
            if u and u.lower().startswith("http"):
                out.append((f"unpaywall:{host}:{version}", u))
    # best_oa_location url_for_pdf at the top of priority if present
    best = data.get("best_oa_location") or {}
    if best.get("url_for_pdf"):
        out.insert(0, (f"unpaywall:best:{best.get('version','')}", best["url_for_pdf"]))
    return out


def europepmc_urls(doi: str, pmid: str) -> list[tuple[str, str]]:
    query = f"DOI:{doi}" if doi else (f"EXT_ID:{pmid}" if pmid else "")
    if not query:
        return []
    raw = fetch(
        "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query="
        + urllib.parse.quote(query)
        + "&format=json&resultType=core"
    )
    if not raw:
        return []
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        return []
    results = data.get("resultList", {}).get("result", [])
    if not results:
        return []
    out: list[tuple[str, str]] = []
    for entry in results:
        for ft in entry.get("fullTextUrlList", {}).get("fullTextUrl", []) or []:
            if ft.get("documentStyle") == "pdf":
                out.append((f"epmc:{ft.get('availability','')}:{ft.get('site','')}", ft["url"]))
    return out


def main(csv_path: str) -> None:
    print("source\tkind\tdoi\tpmid\tpath\tprovider\turl")
    with open(csv_path, newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            if row["access"] != "非全文":
                continue
            doi = row["doi"].strip()
            pmid = row["pmid"].strip()
            path = row["path"]
            sys.stderr.write(f"querying {doi}\n")
            seen: set[str] = set()
            cands: list[tuple[str, str]] = []
            cands.extend(unpaywall_urls(doi))
            cands.extend(europepmc_urls(doi, pmid))
            for provider, url in cands:
                low = url.lower()
                if url in seen:
                    continue
                seen.add(url)
                kind = "pdf" if low.endswith(".pdf") or "pdf" in low else "html"
                print(f"非全文\t{kind}\t{doi}\t{pmid}\t{path}\t{provider}\t{url}")


if __name__ == "__main__":
    csv_arg = sys.argv[1] if len(sys.argv) > 1 else "index/bibliography_and_access_status.csv"
    main(csv_arg)
