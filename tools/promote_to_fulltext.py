#!/usr/bin/env python3
"""Promote one non-fulltext record to fulltext, keeping every index consistent.

Given a DOI and a verified full-text PDF staged on disk, this:
  - moves the PDF into papers/<category>/fulltext/ (NON_FULLTEXT_ prefix dropped)
  - removes the old one-page stub from non_fulltext/
  - updates bibliography_and_access_status.{csv,json}
  - rewrites index/SHA256SUMS.txt, index/manifest.txt, index/pdf_integrity_check.tsv
  - prints the OLD and NEW sha256 so plain-language.json can be re-keyed by hand

The PDF is the single source of truth for sha256 / bytes / pages / first_page_chars,
which are all recomputed here.

Usage:
  python3 tools/promote_to_fulltext.py \
      --doi 10.1093/eurheartj/ehaa605 \
      --pdf /tmp/ehaa605_padua.pdf \
      --access "全文-作者稿" \
      --notes "..." \
      [--entry-url ...]
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import sys

import pypdf

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CSV_PATH = os.path.join(ROOT, "index", "bibliography_and_access_status.csv")
JSON_PATH = os.path.join(ROOT, "index", "bibliography_and_access_status.json")
SHA_PATH = os.path.join(ROOT, "index", "SHA256SUMS.txt")
MANIFEST_PATH = os.path.join(ROOT, "index", "manifest.txt")
INTEGRITY_PATH = os.path.join(ROOT, "index", "pdf_integrity_check.tsv")


def pdf_meta(path: str) -> tuple[str, int, int, int]:
    raw = open(path, "rb").read()
    sha = hashlib.sha256(raw).hexdigest()
    reader = pypdf.PdfReader(path)
    pages = len(reader.pages)
    first_text = reader.pages[0].extract_text() or ""
    return sha, len(raw), pages, len(first_text)


def rewrite_lines(path: str, keep, transform_lines=None) -> None:
    with open(path, encoding="utf-8") as fh:
        lines = fh.readlines()
    out = []
    for line in lines:
        if keep(line):
            out.append(line)
    if transform_lines:
        out = transform_lines(out)
    with open(path, "w", encoding="utf-8") as fh:
        fh.writelines(out)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--doi", required=True)
    ap.add_argument("--pdf", required=True, help="staged verified PDF to install")
    ap.add_argument("--access", required=True, help='e.g. 全文, 全文-作者稿, 全文-预印本')
    ap.add_argument("--notes", required=True)
    ap.add_argument("--entry-url", default=None)
    args = ap.parse_args()

    pdf = os.path.abspath(args.pdf)
    if not os.path.exists(pdf):
        sys.exit(f"staged PDF not found: {pdf}")
    sha, size, pages, first_chars = pdf_meta(pdf)

    # --- find the record in the JSON (authoritative) ---
    with open(JSON_PATH, encoding="utf-8") as fh:
        records = json.load(fh)
    match = [r for r in records if r["doi"] == args.doi]
    if not match:
        sys.exit(f"no bibliography record for DOI {args.doi}")
    rec = match[0]
    if rec["access"].startswith("全文"):
        sys.exit(f"{args.doi} is already full text ({rec['access']})")
    old_sha = rec["sha256"]
    old_path = rec["path"]
    category_dir = os.path.basename(os.path.dirname(os.path.dirname(old_path)))  # papers/<cat>/...
    # old_path like papers/adult/non_fulltext/<file>; build papers/<cat>/fulltext/<file>
    parts = old_path.split("/")
    cat = parts[1]
    old_basename = parts[-1]
    assert "NON_FULLTEXT_" in old_basename, f"unexpected filename: {old_basename}"
    new_basename = old_basename.replace("NON_FULLTEXT_", "")
    new_path = f"papers/{cat}/fulltext/{new_basename}"
    abs_new = os.path.join(ROOT, new_path)
    abs_old = os.path.join(ROOT, old_path)

    # --- install the PDF, remove the stub ---
    os.makedirs(os.path.dirname(abs_new), exist_ok=True)
    with open(pdf, "rb") as src, open(abs_new, "wb") as dst:
        dst.write(src.read())
    if os.path.exists(abs_old):
        os.remove(abs_old)

    # --- update the JSON record (immutably: build a new list) ---
    def upgraded(r):
        if r["doi"] != args.doi:
            return r
        return {
            **r,
            "access": args.access,
            "path": new_path,
            "pages": str(pages),
            "bytes": str(size),
            "sha256": sha,
            "notes": args.notes,
            **({"entry_url": args.entry_url} if args.entry_url else {}),
        }
    new_records = [upgraded(r) for r in records]
    with open(JSON_PATH, "w", encoding="utf-8") as fh:
        json.dump(new_records, fh, ensure_ascii=False, indent=2)
        fh.write("\n")

    # --- update the CSV surgically (one line swapped in place) ---
    # A full csv.DictWriter round-trip would re-quote every row and flip line
    # endings, producing a 170-line diff for a one-record change. Instead we
    # rebuild only the affected line from the upgraded record and splice it in,
    # preserving the original byte order, quoting, line endings, and BOM.
    upgraded_rec = next(r for r in new_records if r["doi"] == args.doi)

    def csv_field(value: str) -> str:
        value = "" if value is None else str(value)
        return f'"{value}"' if ("," in value or '"' in value or "\n" in value) else value

    with open(CSV_PATH, encoding="utf-8") as fh:
        csv_lines = fh.readlines()
    with open(CSV_PATH, "w", encoding="utf-8", newline="") as fh:
        for line in csv_lines:
            if old_path in line:
                fh.write(",".join(
                    csv_field(upgraded_rec[k])
                    for k in (
                        "category", "access", "year", "title", "journal", "doi",
                        "pmid", "pmcid", "entry_url", "notes", "path", "pages",
                        "bytes", "sha256",
                    )
                ) + "\n")
            else:
                fh.write(line)

    # --- SHA256SUMS.txt: drop old path line, add new (keep path-sorted) ---
    with open(SHA_PATH, encoding="utf-8") as fh:
        sha_lines = [ln for ln in fh if ln.strip()]
    sha_lines = [ln for ln in sha_lines if not ln.strip().endswith(old_path)]
    sha_lines.append(f"{sha}  {new_path}\n")
    sha_lines.sort(key=lambda ln: ln.split("  ", 1)[1] if "  " in ln else ln)
    with open(SHA_PATH, "w", encoding="utf-8") as fh:
        fh.writelines(sha_lines)

    # --- manifest.txt: swap the path line (keep sorted) ---
    with open(MANIFEST_PATH, encoding="utf-8") as fh:
        man = [ln for ln in fh if ln.strip()]
    man = [ln for ln in man if ln.strip() != old_path]
    man.append(new_path + "\n")
    man.sort()
    with open(MANIFEST_PATH, "w", encoding="utf-8") as fh:
        fh.writelines(man)

    # --- pdf_integrity_check.tsv: move the row into the fulltext group by year ---
    # The TSV is ordered population -> year-desc, so the row changes access group
    # and year-position. We delete the old line and insert the new one next to the
    # closest same-year fulltext neighbour, yielding a clean 1-del/1-add diff
    # rather than a full re-sort.
    with open(INTEGRITY_PATH, encoding="utf-8") as fh:
        tsv_lines = fh.readlines()
    header = tsv_lines[0]
    body = [ln for ln in tsv_lines[1:] if old_path not in ln]
    pop = cat  # "pediatric" | "adult"
    new_row = f"OK\t{pop}\tfulltext\t{pages}\t{first_chars}\t{new_path}\n"
    insert_at = len(body)
    for i, ln in enumerate(body):
        if f"papers/{cat}/fulltext/" in ln and f"\t{rec['year']}\t" in ln:
            insert_at = i + 1  # after the first same-year fulltext row
            break
    body.insert(insert_at, new_row)
    with open(INTEGRITY_PATH, "w", encoding="utf-8", newline="") as fh:
        fh.write(header)
        fh.writelines(body)

    print(f"PROMOTED {args.doi}")
    print(f"  old sha256: {old_sha}")
    print(f"  new sha256: {sha}")
    print(f"  path: {old_path} -> {new_path}")
    print(f"  pages={pages} bytes={size} first_page_chars={first_chars}")
    print("Next: re-key plain-language.json and run: npm run sync:data (in website/)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
