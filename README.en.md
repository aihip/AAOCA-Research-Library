# AAOCA / AAORCA Research Library

[![Live site](https://img.shields.io/badge/Live%20site-aaoca.pheth.com-0d4b4d?style=for-the-badge)](https://aaoca.pheth.com/)

[Search online](https://aaoca.pheth.com) · [中文](README.md) · [Cite this project](CITATION.cff) · [Rights and full-text policy](RIGHTS.md) · [Contributing](CONTRIBUTING.md)

The **AAOCA Research Library** is a bilingual, deduplicated bibliography on **anomalous aortic origin of a coronary artery (AAOCA)** and **anomalous aortic origin of the right coronary artery (AAORCA / ARCA-L)**. It covers pediatric and adult cohorts, expert consensus statements, clinical guidelines, multimodality imaging, ischemia and risk assessment, sports participation, and surgical management.

Last curated: **2026-08-10**

## Collection at a glance

- **64** unique literature records and **632** verified PDF pages
- **39 pediatric** records: 21 full-text records and 18 non-full-text access cards
- **25 adult** records: 11 full-text records and 14 non-full-text access cards
- **8 expert consensus or guideline** entries, each indexed separately
- DOI, PMID, PMCID, publisher/source entry, access status, file path, page count, byte count, and SHA-256 fields where available

The authoritative record-level index is available as [CSV](index/bibliography_and_access_status.csv) and [JSON](index/bibliography_and_access_status.json). The Chinese [README](README.md) contains the full human-readable bibliography with direct repository links.

> [!WARNING]
> Any file whose name contains `NON_FULLTEXT` is **not the article full text**. It is a one-page bibliographic access card created when the publisher paywall, login requirement, anti-automation control, or source availability prevented lawful retrieval of the complete article. Each card is visibly marked “非全文 / NOT FULL TEXT” and includes the DOI, PMID when available, and original source entry. Abstracts are never presented as papers.

## Repository structure

```text
papers/
├── pediatric/
│   ├── fulltext/
│   └── non_fulltext/
└── adult/
    ├── fulltext/
    └── non_fulltext/

index/
├── bibliography_and_access_status.csv
├── bibliography_and_access_status.json
├── pdf_integrity_check.tsv
├── SHA256SUMS.txt
└── manifest.txt

website/
└── bilingual searchable web interface
```

## Classification and access rules

- A record is classified as pediatric when children, adolescents, or pediatric congenital heart disease are its principal population or clinical setting.
- Adult cohorts and adult congenital heart disease guidelines are classified as adult.
- Mixed-age studies appear in one category only; the rationale is recorded in the Chinese index notes.
- “Full text” describes what is present in this research collection. It does **not** assert that the repository owns copyright or grants redistribution rights.
- A `NON_FULLTEXT` card is a locator only. Retrieve and verify the version of record through its DOI, PMID, PMCID, or publisher entry before citing it.

## Search terms

AAOCA; AAORCA; ARCA-L; anomalous aortic origin of a coronary artery; anomalous origin of the right coronary artery; coronary artery anomaly; congenital coronary anomaly; interarterial coronary course; intramural coronary artery; unroofing; coronary reimplantation; pediatric cardiology; adult congenital heart disease; 冠状动脉起源异常; 主动脉起源异常; 右冠状动脉起源异常; 先天性冠状动脉异常; 壁内段; 冠状动脉去顶术; 冠状动脉再植术.

## Citation, rights, and contributions

- Use [CITATION.cff](CITATION.cff) when citing the collection.
- Repository-authored software is MIT-licensed. Repository-authored documentation and curated metadata are CC BY 4.0. Third-party article PDFs are excluded; see [RIGHTS.md](RIGHTS.md).
- Corrections and additions are welcome through the process in [CONTRIBUTING.md](CONTRIBUTING.md).
- This library supports literature discovery and research organization. It is not medical advice.
