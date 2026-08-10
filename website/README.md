# AAOCA Research Library website

The public interface for the repository bibliography, written for patients and
families first and researchers second.

Production: <https://aaoca.pheth.com>

## Audience and shape

The site is Chinese-first. A reader arriving after a diagnosis meets a
plain-language primer, then six question pages, then the full searchable index:

```text
/                      Chinese landing page
/topics/[slug]         one page per family question
/papers/[slug]         one page per bibliography record
/en, /en/topics/…      the English tree, same components
```

The six question slugs are `what-is-it`, `how-serious`, `what-tests`, `sports`,
`surgery`, and `guidelines`. They are defined in `lib/topics.ts`, together with
the hand-written framing paragraph that opens each page.

Language is a property of the route, not React state. `lib/i18n/{zh,en}.ts` hold
every user-facing string; `app/(zh)` and `app/(en)` are separate root layouts so
each tree emits its own `<html lang>` and real hreflang alternates.

## Data flow

`npm run sync:data` copies the authoritative repository index from
`../index/bibliography_and_access_status.json` to `data/papers.json`. When the
parent index is unavailable, the build verifies and uses the bundled copy.

Editorial content lives in a separate overlay, `data/plain-language.json`, keyed
by each record's `sha256`:

```json
{
  "d29299…": {
    "title_zh": "…",
    "summary_zh": "…",
    "topics": ["how-serious", "what-is-it"],
    "reviewed": false
  }
}
```

`lib/library.ts` joins the overlay onto the index at build time. It is kept out
of the authoritative index on purpose: that file records checksums and paths and
is overwritten by `sync:data` on every build.

### Writing and reviewing summaries

Summaries describe what a study set out to examine — its design, population, and
sample size — in the form *this study reported*. They do not give advice, and
they do not assert findings that have not been checked against the source.

Every entry carries a `reviewed` flag. While it is `false`, the summary renders
with a visible **AI 初稿** badge stating that a person has not checked it yet.
Setting it to `true` is the human review step; nothing else changes.

`title_zh` is optional and omitted for the one record whose original title is
already Chinese.

## Local development

Node.js 22.13 or newer is required — the build uses `fs.promises.glob`, which
older releases do not export.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test
```

`npm test` builds the site and asserts against the rendered HTML. It covers the
64-record inventory (pediatric/adult, full-text/non-full-text, 632 pages, unique
paths and hashes, a persistent source for every access card), that the overlay
keys still match the index, that the `guidelines` topic has not drifted from the
8 title-derived consensus records, that no question page is empty, that both
language trees render with the correct `lang` and mutual hreflang, that
unreviewed summaries are labelled, and that non-full-text records explain in
plain words how to obtain the article.

## Search indexing

The application emits:

- bilingual titles, descriptions, keywords, and visible content;
- canonical URLs, real hreflang alternates, and Open Graph/Twitter metadata;
- Dataset, CollectionPage, and ScholarlyArticle/MedicalGuideline structured data;
- `robots.txt`, `sitemap.xml` covering both trees, and a web app manifest;
- one stable detail URL for every bibliography record, in each language.

The public interface links to DOI, PMID, PMCID, and original source entries. It
does not host the repository's third-party PDF collection.
