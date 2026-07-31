# AAOCA Research Library website

This directory contains the bilingual, searchable public interface for the repository bibliography.

Production: <https://aaoca.pheth.com>

## Data flow

`npm run sync:data` copies the authoritative repository index from:

```text
../index/bibliography_and_access_status.json
```

to the bundled deployment data file:

```text
data/papers.json
```

The build can also run from the standalone website source repository. When the parent index is unavailable, it verifies and uses the bundled copy.

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test
```

The tests verify the 63-record inventory, pediatric/adult and full-text/non-full-text counts, 622-page total, unique paths and hashes, source identifiers for non-full-text cards, bilingual server rendering, and record-level warnings.

## Search indexing

The application emits:

- bilingual titles, descriptions, keywords, and visible content;
- canonical URLs and Open Graph/Twitter metadata;
- Dataset and ScholarlyArticle/MedicalGuideline structured data;
- `robots.txt`, `sitemap.xml`, and a web app manifest;
- one stable detail URL for every bibliography record.

The public interface links to DOI, PMID, PMCID, and original source entries. It does not host the repository’s third-party PDF collection.
