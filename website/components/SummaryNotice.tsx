import { type Dictionary } from "../lib/i18n";
import type { Paper } from "../lib/library";

/**
 * The per-card badge explains itself through a `title` tooltip, which touch
 * devices never surface. This states the same thing in body text, once per
 * list, so a reader on a phone is not left with a bare "AI 初稿未校" pill and no
 * way to find out what it means.
 */
export function SummaryNotice({
  records,
  dict,
}: {
  records: Paper[];
  dict: Dictionary;
}) {
  const showsSummaries =
    dict.lang === "zh" && records.some((paper) => Boolean(paper.summaryZh));

  if (!showsSummaries) return null;

  return <p className="summary-notice">{dict.card.summaryNotice}</p>;
}
