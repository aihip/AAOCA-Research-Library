import { isFullText, type Paper } from "./library";
import { expandTerm } from "./synonyms";
import { findTopic } from "./topics";

const GLOBAL_ALIASES =
  "aaoca aaorca arca-l 冠状动脉起源异常 先天性冠状动脉异常 anomalous aortic origin coronary";

function haystack(paper: Paper): string {
  const populationAliases =
    paper.category === "儿童"
      ? "儿童 儿科 小儿 pediatric paediatric child children adolescent"
      : "成人 adult grown-up";

  const accessAliases = isFullText(paper)
    ? "全文 有全文 full text"
    : "非全文 没有全文 not full text access card 访问卡";

  const topicAliases = paper.topics
    .map((slug) => {
      const topic = findTopic(slug);
      return topic ? `${slug} ${topic.zh.question} ${topic.en.question}` : slug;
    })
    .join(" ");

  return [
    paper.title,
    paper.titleZh,
    paper.summaryZh,
    paper.journal,
    paper.year,
    paper.doi,
    paper.pmid,
    paper.pmcid,
    paper.notes,
    paper.access,
    populationAliases,
    accessAliases,
    topicAliases,
    GLOBAL_ALIASES,
  ]
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase();
}

/** Precomputed once per record — the collection is small and static. */
const haystackCache = new WeakMap<Paper, string>();

function textFor(paper: Paper): string {
  const cached = haystackCache.get(paper);
  if (cached) return cached;
  const text = haystack(paper);
  haystackCache.set(paper, text);
  return text;
}

function termMatches(text: string, term: string): boolean {
  return expandTerm(term).some((alias) => text.includes(alias));
}

export type SearchResult = {
  matches: Paper[];
  /** True when no record matched every term and we fell back to any-term matching. */
  loose: boolean;
};

/**
 * Strict AND matching across terms, with synonym expansion per term. When that
 * returns nothing, falls back to any-term matching rather than showing a dead
 * end — a lay query rarely matches every word of a clinical title.
 */
export function searchPapers(records: Paper[], query: string): SearchResult {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);

  if (!terms.length) return { matches: records, loose: false };

  const strict = records.filter((paper) => {
    const text = textFor(paper);
    return terms.every((term) => termMatches(text, term));
  });

  if (strict.length || terms.length === 1) {
    return { matches: strict, loose: false };
  }

  const loose = records.filter((paper) => {
    const text = textFor(paper);
    return terms.some((term) => termMatches(text, term));
  });

  return { matches: loose, loose: loose.length > 0 };
}
