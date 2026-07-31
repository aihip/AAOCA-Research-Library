import Link from "next/link";
import { href, type Dictionary } from "../lib/i18n";
import {
  displayTitle,
  hasDistinctOriginalTitle,
  isConsensus,
  isFullText,
  type Paper,
} from "../lib/library";

export function PaperCard({ paper, dict }: { paper: Paper; dict: Dictionary }) {
  const fullText = isFullText(paper);
  const heading = displayTitle(paper, dict.lang);
  const showOriginal = hasDistinctOriginalTitle(paper, dict.lang);
  const summary = dict.lang === "zh" ? paper.summaryZh : undefined;
  const detailHref = href(dict, `/papers/${paper.slug}`);

  return (
    <article className="paper-card">
      <div className="paper-meta">
        <span>{paper.year}</span>
        <span>
          {paper.category === "儿童"
            ? dict.card.pediatricBadge
            : dict.card.adultBadge}
        </span>
        <span className={fullText ? "access-badge full" : "access-badge nonfull"}>
          {fullText ? dict.card.fullBadge : dict.card.nonfullBadge}
        </span>
        {isConsensus(paper) && (
          <span className="consensus-badge">{dict.card.consensusBadge}</span>
        )}
      </div>

      <h3>
        <Link href={detailHref}>{heading}</Link>
      </h3>
      {showOriginal && <p className="original-title">{paper.title}</p>}
      <p className="journal">{paper.journal}</p>

      {summary && (
        <p className="plain-summary">
          {summary}
          <span
            className={`check-badge ${paper.check}`}
            title={dict.card.summaryCheck[paper.check].note}
          >
            {dict.card.summaryCheck[paper.check].badge}
          </span>
        </p>
      )}

      {!fullText && <p className="nonfull-note">{dict.card.nonfullNote}</p>}

      <div className="identifier-row">
        {paper.doi && <span>DOI {paper.doi}</span>}
        {paper.pmid && <span>PMID {paper.pmid}</span>}
        {!paper.doi && !paper.pmid && <span>{dict.card.noIdentifier}</span>}
      </div>

      <div className="paper-actions">
        <Link className="primary-link" href={detailHref}>
          {dict.card.view} <span aria-hidden="true">→</span>
        </Link>
        {paper.entry_url && (
          <a href={paper.entry_url} target="_blank" rel="noreferrer">
            {dict.card.source} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
