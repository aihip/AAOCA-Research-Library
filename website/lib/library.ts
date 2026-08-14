import papersData from "../data/papers.json";
import libraryGrowthData from "../data/library-growth.json";
import plainLanguageData from "../data/plain-language.json";
import type { Language } from "./i18n/types";
import { isTopicSlug, TOPIC_SLUGS, type TopicSlug } from "./topics";

/** A record exactly as it appears in the authoritative repository index. */
export type PaperRecord = {
  category: "儿童" | "成人";
  access: string;
  year: string;
  title: string;
  journal: string;
  doi: string;
  pmid: string;
  pmcid: string;
  entry_url: string;
  notes: string;
  path: string;
  pages: string;
  bytes: string;
  sha256: string;
};

/**
 * How far the Chinese summary has been checked. Every summary is AI-drafted and
 * every check is performed by AI — no medical professional signs off at any
 * level, which is why none of these states is called "reviewed".
 *
 * - `source`   checked line by line against the full text held in this repository
 * - `metadata` no full text exists here, so it could only be checked against the
 *              title and the curator note
 * - `draft`    not checked at all
 */
export type SummaryCheck = "source" | "metadata" | "draft";

const SUMMARY_CHECKS: SummaryCheck[] = ["source", "metadata", "draft"];

function isSummaryCheck(value: unknown): value is SummaryCheck {
  return SUMMARY_CHECKS.includes(value as SummaryCheck);
}

/** Editorial content layered on top of a record, keyed by sha256. */
export type PlainLanguage = {
  titleZh?: string;
  summaryZh?: string;
  topics: TopicSlug[];
  check: SummaryCheck;
};

export type Paper = PaperRecord & PlainLanguage & { slug: string };

type PlainLanguageEntry = {
  title_zh?: string;
  summary_zh?: string;
  topics?: string[];
  check?: string;
};

const overlay = plainLanguageData as Record<string, PlainLanguageEntry>;

function slugFor(record: PaperRecord) {
  return `${record.year}-${record.sha256.slice(0, 12)}`;
}

/**
 * Joins the editorial overlay onto the authoritative index. Records with no
 * overlay entry still render — they fall back to the original title and show no
 * summary — so the site stays usable while content is being written.
 */
function enrich(record: PaperRecord): Paper {
  const entry = overlay[record.sha256];
  const topics = (entry?.topics ?? []).filter(isTopicSlug);

  return {
    ...record,
    slug: slugFor(record),
    titleZh: entry?.title_zh,
    summaryZh: entry?.summary_zh,
    topics,
    check: isSummaryCheck(entry?.check) ? entry.check : "draft",
  };
}

export const papers: Paper[] = (papersData as PaperRecord[])
  .map(enrich)
  .sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title));

const consensusPattern =
  /consensus|guideline|recommendations|scientific statement|专家共识|指南/i;

export function isFullText(paper: PaperRecord) {
  return paper.access.startsWith("全文");
}

/**
 * Guidance is derived from the title, not from the editorial topic tag, so that
 * the count stays pinned to the 8 records documented in the repository README
 * and cannot drift as topics are assigned. A test asserts the two agree.
 */
export function isConsensus(paper: PaperRecord) {
  return consensusPattern.test(paper.title);
}

export function paperSlug(paper: Paper) {
  return paper.slug;
}

export function findPaper(slug: string) {
  return papers.find((paper) => paper.slug === slug);
}

/** The title to show as the heading, falling back when no translation exists. */
export function displayTitle(paper: Paper, lang: Language) {
  if (lang === "en") return paper.title;
  return paper.titleZh || paper.title;
}

/** True when the heading and the original title differ and both are worth showing. */
export function hasDistinctOriginalTitle(paper: Paper, lang: Language) {
  return displayTitle(paper, lang) !== paper.title;
}

/**
 * Question-page ordering: guidance first, then records whose full text is held
 * here, then paywalled access cards. Newest first inside each group, so a
 * family's first clicks land on something they can actually read.
 */
export function orderForReading(list: Paper[]): Paper[] {
  const rank = (paper: Paper) => {
    if (isConsensus(paper)) return 0;
    return isFullText(paper) ? 1 : 2;
  };

  return list
    .slice()
    .sort((a, b) => rank(a) - rank(b) || Number(b.year) - Number(a.year));
}

export function papersForTopic(slug: TopicSlug): Paper[] {
  return orderForReading(papers.filter((paper) => paper.topics.includes(slug)));
}

export const topicCounts: Record<TopicSlug, number> = Object.fromEntries(
  TOPIC_SLUGS.map((slug) => [
    slug,
    papers.filter((paper) => paper.topics.includes(slug)).length,
  ]),
) as Record<TopicSlug, number>;

export const libraryStats = {
  total: papers.length,
  pages: papers.reduce((sum, paper) => sum + Number(paper.pages || 0), 0),
  pediatric: papers.filter((paper) => paper.category === "儿童").length,
  adult: papers.filter((paper) => paper.category === "成人").length,
  fullText: papers.filter(isFullText).length,
  nonFullText: papers.filter((paper) => !isFullText(paper)).length,
  consensus: papers.filter(isConsensus).length,
  checkedAgainstSource: papers.filter((paper) => paper.check === "source").length,
  checkedAgainstMetadata: papers.filter((paper) => paper.check === "metadata")
    .length,
  drafted: papers.filter((paper) => Boolean(paper.summaryZh)).length,
};

export type TimelineCount = {
  label: string;
  count: number;
};

function countBy(values: string[]): TimelineCount[] {
  const counts = values.reduce<Record<string, number>>((result, value) => {
    result[value] = (result[value] ?? 0) + 1;
    return result;
  }, {});

  return Object.entries(counts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.label.localeCompare(a.label));
}

const growthRecords = (
  libraryGrowthData as { generatedAt: string; records: Record<string, string> }
).records;

/**
 * Homepage timeline data is derived from the bibliography itself. Publication
 * years therefore update whenever the index changes, while accession months
 * come from the first commit in which each current record appeared.
 */
export const publicationYearCounts = countBy(papers.map((paper) => paper.year));

export const accessionMonthCounts = countBy(
  papers.map((paper) => growthRecords[paper.sha256]).filter(Boolean),
);
