import Link from "next/link";
import { href, type Dictionary } from "../lib/i18n";
import { displayTitle, findPaper } from "../lib/library";

/**
 * Turns the hand-written medical prose on this site into something a reader can
 * check. Titles come from the record itself rather than being restated here, so
 * a link can never drift away from what it points at.
 */
export function SourceList({
  slugs,
  label,
  dict,
}: {
  slugs: string[];
  label: string;
  dict: Dictionary;
}) {
  const sources = slugs
    .map((slug) => findPaper(slug))
    .filter((paper) => paper !== undefined);

  if (!sources.length) return null;

  return (
    <aside className="source-list">
      <p>{label}</p>
      <ul>
        {sources.map((paper) => (
          <li key={paper.slug}>
            <Link href={href(dict, `/papers/${paper.slug}`)}>
              {displayTitle(paper, dict.lang)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
