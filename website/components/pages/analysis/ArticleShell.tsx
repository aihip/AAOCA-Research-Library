import Link from "next/link";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { absoluteUrl, getDictionary, href, type Language } from "../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../lib/analyses";

export type Localized = { zh: string; en: string };

/**
 * The section kinds below are the only shapes these analyses need. Keeping them
 * as data rather than bespoke markup means a new article is a content file, and
 * every article keeps the same heading, anchor, and table-of-contents behaviour.
 */
export type Section =
  | { id: string; nav: Localized; kind: "prose"; heading: Localized; lede?: Localized; paragraphs: Localized[] }
  | { id: string; nav: Localized; kind: "cards"; heading: Localized; lede?: Localized; items: { title: Localized; body: Localized }[] }
  | { id: string; nav: Localized; kind: "table"; heading: Localized; lede?: Localized; headers: Localized[]; rows: Localized[][]; note?: Localized; wide?: boolean }
  | { id: string; nav: Localized; kind: "steps"; heading: Localized; lede?: Localized; steps: Localized[]; quote?: Localized }
  | { id: string; nav: Localized; kind: "stats"; heading: Localized; lede?: Localized; stats: { value: string; label: Localized }[]; note?: Localized };

export type ArticleCopy = {
  back: Localized;
  label: Localized;
  title: Localized;
  lede: Localized;
  method: Localized;
  toc: Localized;
  sourcesHeading: Localized;
  sourcesLede: Localized;
  /** Library records this analysis draws on, in reading order. */
  sources: { slug: string; title: Localized }[];
  /** Cited material that has no record in this library, with its public entry. */
  external?: { url: string; title: Localized }[];
  externalHeading?: Localized;
};

function SectionBody({ section, lang }: { section: Section; lang: Language }) {
  switch (section.kind) {
    case "prose":
      return (
        <div className="analysis-prose">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.en.slice(0, 32)}>{paragraph[lang]}</p>
          ))}
        </div>
      );
    case "cards":
      return (
        <div className={`takeaway-grid grid-${section.items.length}`}>
          {section.items.map((item, index) => (
            <article key={item.title.en}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title[lang]}</h3>
              <p>{item.body[lang]}</p>
            </article>
          ))}
        </div>
      );
    case "table":
      return (
        <>
          <div className={`analysis-table-wrap ${section.wide ? "evidence-table" : "compact-table"}`}>
            <table>
              <thead>
                <tr>
                  {section.headers.map((header) => (
                    <th key={header.en}>{header[lang]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={row[0].en}>
                    <th scope="row">{row[0][lang]}</th>
                    {row.slice(1).map((cell, index) => (
                      <td key={section.headers[index + 1].en} data-label={section.headers[index + 1][lang]}>
                        {cell[lang]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.note ? <p className="denominator-note">{section.note[lang]}</p> : null}
        </>
      );
    case "steps":
      return (
        <>
          <ol className={`step-chain chain-${section.steps.length}`}>
            {section.steps.map((step, index) => (
              <li key={step.en}>
                <span>{index + 1}</span>
                <strong>{step[lang]}</strong>
              </li>
            ))}
          </ol>
          {section.quote ? (
            <blockquote className="analysis-pullquote">{section.quote[lang]}</blockquote>
          ) : null}
        </>
      );
    case "stats":
      return (
        <>
          <div className={`chss-grid stat-${section.stats.length}`}>
            {section.stats.map((stat) => (
              <article key={stat.label.en}>
                <strong>{stat.value}</strong>
                <span>{stat.label[lang]}</span>
              </article>
            ))}
          </div>
          {section.note ? <p className="denominator-note">{section.note[lang]}</p> : null}
        </>
      );
  }
}

export function AnalysisArticle({
  lang,
  slug,
  copy,
  sections,
}: {
  lang: Language;
  slug: string;
  copy: ArticleCopy;
  sections: Section[];
}) {
  const dict = getDictionary(lang);
  const meta = analysisBySlug(slug);
  const path = analysisPath(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "AnalysisNewsArticle",
    headline: copy.title[lang],
    description: copy.lede[lang],
    datePublished: meta.date,
    dateModified: meta.date,
    inLanguage: dict.htmlLang,
    url: absoluteUrl(`${dict.basePath}${path}`),
    mainEntityOfPage: absoluteUrl(`${dict.basePath}${path}`),
    author: {
      "@type": "Organization",
      name: "AAOCA Research Library contributors",
    },
    citation: [
      ...copy.sources.map(({ slug: record }) => absoluteUrl(`${dict.basePath}/papers/${record}`)),
      ...(copy.external ?? []).map((item) => item.url),
    ],
  };

  return (
    <main className="analysis-shell">
      <SiteHeader dict={dict} path={path} />

      <article className="analysis-article">
        <Link className="back-link" href={href(dict, "/analysis")}>
          {copy.back[lang]}
        </Link>

        <header className="analysis-article-header">
          <div className="analysis-byline">
            <span>{copy.label[lang]}</span>
            <time dateTime={meta.date}>{meta.dateLabel[lang]}</time>
            <span>{meta.readingLabel[lang]}</span>
          </div>
          <h1>{copy.title[lang]}</h1>
          <p className="analysis-standfirst">{copy.lede[lang]}</p>
          <p className="analysis-method-note">{copy.method[lang]}</p>
        </header>

        <nav className="analysis-toc" aria-label={copy.toc[lang]}>
          <strong>{copy.toc[lang]}</strong>
          <ol>
            {sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.nav[lang]}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {sections.map((section, index) => (
          <section className="analysis-section" id={section.id} key={section.id}>
            <p className="eyebrow">
              {String(index + 1).padStart(2, "0")} · {section.nav[lang]}
            </p>
            <h2>{section.heading[lang]}</h2>
            {section.lede ? <p className="analysis-section-lede">{section.lede[lang]}</p> : null}
            <SectionBody section={section} lang={lang} />
          </section>
        ))}

        <section className="analysis-section analysis-sources">
          <p className="eyebrow">{lang === "zh" ? "文献入口" : "Sources"}</p>
          <h2>{copy.sourcesHeading[lang]}</h2>
          <p className="analysis-section-lede">{copy.sourcesLede[lang]}</p>
          <ol>
            {copy.sources.map((source) => (
              <li key={source.slug}>
                <Link href={href(dict, `/papers/${source.slug}`)}>{source.title[lang]}</Link>
              </li>
            ))}
          </ol>
          {copy.external?.length ? (
            <>
              <p className="denominator-note">{copy.externalHeading?.[lang]}</p>
              <ol>
                {copy.external.map((item) => (
                  <li key={item.url}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.title[lang]} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ol>
            </>
          ) : null}
        </section>
      </article>

      <SiteFooter dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </main>
  );
}
