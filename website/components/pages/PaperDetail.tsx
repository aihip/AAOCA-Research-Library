import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { getDictionary, href, type Language } from "../../lib/i18n";
import {
  displayTitle,
  hasDistinctOriginalTitle,
  isConsensus,
  isFullText,
  type Paper,
} from "../../lib/library";
import { REPOSITORY_URL, SITE_URL } from "../../lib/site";
import { findTopic } from "../../lib/topics";

function externalIdentifiers(paper: Paper) {
  return [
    paper.doi && {
      label: "DOI",
      value: paper.doi,
      url: `https://doi.org/${paper.doi}`,
    },
    paper.pmid && {
      label: "PMID",
      value: paper.pmid,
      url: `https://pubmed.ncbi.nlm.nih.gov/${paper.pmid}/`,
    },
    paper.pmcid && {
      label: "PMCID",
      value: paper.pmcid,
      url: `https://pmc.ncbi.nlm.nih.gov/articles/${paper.pmcid}/`,
    },
  ].filter(Boolean) as { label: string; value: string; url: string }[];
}

export function PaperDetail({ lang, paper }: { lang: Language; paper: Paper }) {
  const dict = getDictionary(lang);
  const fullText = isFullText(paper);
  const heading = displayTitle(paper, lang);
  const showOriginal = hasDistinctOriginalTitle(paper, lang);
  const summary = lang === "zh" ? paper.summaryZh : undefined;
  const identifiers = externalIdentifiers(paper);
  const path = `/papers/${paper.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": isConsensus(paper) ? "MedicalGuideline" : "ScholarlyArticle",
    name: paper.title,
    headline: paper.title,
    alternativeHeadline: paper.titleZh || undefined,
    datePublished: paper.year,
    isPartOf: paper.journal,
    url: `${SITE_URL}${dict.basePath}${path}`,
    sameAs: paper.entry_url || undefined,
    identifier: [
      paper.doi && `https://doi.org/${paper.doi}`,
      paper.pmid && `PMID:${paper.pmid}`,
      paper.pmcid && `PMCID:${paper.pmcid}`,
    ].filter(Boolean),
    inLanguage: ["en", "zh-CN"],
  };

  return (
    <main className="detail-shell">
      <SiteHeader dict={dict} path={path} />

      <article className="paper-detail">
        <Link className="back-link" href={href(dict, "/#library")}>
          {dict.detail.backToAll}
        </Link>

        <div className="paper-meta detail-meta">
          <span>{paper.year}</span>
          <span>
            {paper.category === "儿童"
              ? dict.card.pediatricBadge
              : dict.card.adultBadge}
          </span>
          <span className={fullText ? "access-badge full" : "access-badge nonfull"}>
            {fullText ? dict.detail.accessFull : dict.detail.accessNonFull}
          </span>
          {isConsensus(paper) && (
            <span className="consensus-badge">{dict.card.consensusBadge}</span>
          )}
        </div>

        <h1>{heading}</h1>
        {showOriginal && (
          <p className="detail-original-title">
            <span>{dict.detail.originalTitleLabel}</span>
            {paper.title}
          </p>
        )}
        <p className="detail-journal">{paper.journal}</p>

        {summary && (
          <section className="detail-summary">
            <h2>{dict.detail.summaryHeading}</h2>
            <p>{summary}</p>
            <p className="check-note">
              <span className={`check-badge ${paper.check}`}>
                {dict.card.summaryCheck[paper.check].badge}
              </span>
              {dict.card.summaryCheck[paper.check].note}
            </p>
          </section>
        )}

        {!fullText && (
          <div className="nonfull-alert">
            <strong>{dict.detail.nonfullHeading}</strong>
            <p>{dict.detail.nonfullBody}</p>
            <p>{dict.detail.nonfullHowTo}</p>
          </div>
        )}

        <section className="identifier-section">
          <p className="eyebrow">{dict.detail.identifiersEyebrow}</p>
          <h2>{dict.detail.identifiersHeading}</h2>
          <p className="section-lede">{dict.detail.identifiersHelp}</p>
          {identifiers.length ? (
            <div className="identifier-links">
              {identifiers.map((identifier) => (
                <a
                  key={identifier.label}
                  href={identifier.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{identifier.label}</span>
                  <strong>{identifier.value}</strong>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          ) : (
            <p className="missing-id">{dict.detail.noIdentifiers}</p>
          )}

          {paper.entry_url && (
            <a
              className="source-button"
              href={paper.entry_url}
              target="_blank"
              rel="noreferrer"
            >
              {dict.detail.openSource} ↗
            </a>
          )}
        </section>

        <dl className="record-grid">
          <div>
            <dt>{dict.detail.populationLabel}</dt>
            <dd>
              {paper.category === "儿童"
                ? dict.card.pediatricBadge
                : dict.card.adultBadge}
            </dd>
          </div>
          <div>
            <dt>{dict.detail.accessLabel}</dt>
            <dd>{paper.access}</dd>
          </div>
          <div>
            <dt>{dict.detail.pagesLabel}</dt>
            <dd>{paper.pages}</dd>
          </div>
          <div>
            <dt>{dict.detail.curatorNoteLabel}</dt>
            <dd>{paper.notes || "—"}</dd>
          </div>
        </dl>

        {paper.topics.length > 0 && (
          <section className="detail-topics">
            <h2>{dict.detail.topicsLabel}</h2>
            <div className="chip-row">
              {paper.topics.map((slug) => {
                const topic = findTopic(slug);
                if (!topic) return null;
                return (
                  <Link key={slug} href={href(dict, `/topics/${slug}`)}>
                    {topic[lang].question}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <details className="provenance">
          <summary>{dict.detail.provenanceSummary}</summary>
          <dl>
            <div>
              <dt>{dict.detail.recordPath}</dt>
              <dd>
                <a
                  href={`${REPOSITORY_URL}/blob/main/${paper.path}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {paper.path} ↗
                </a>
              </dd>
            </div>
            <div>
              <dt>{dict.detail.checksum}</dt>
              <dd>{paper.sha256}</dd>
            </div>
          </dl>
          <p>{dict.detail.provenanceNote}</p>
        </details>
      </article>

      <SiteFooter dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </main>
  );
}
