"use client";

import { useMemo, useState } from "react";
import type { Paper } from "../lib/library";
import { isConsensus, isFullText, paperSlug } from "../lib/library";

type Language = "zh" | "en";
type Population = "all" | "pediatric" | "adult";
type Access = "all" | "full" | "nonfull";

const copy = {
  zh: {
    searchLabel: "搜索文献",
    searchPlaceholder: "输入题名、DOI、PMID、期刊、AAOCA 或中文关键词",
    population: "人群",
    access: "获取状态",
    kind: "文献类型",
    all: "全部",
    pediatric: "儿童",
    adult: "成人",
    full: "全文记录",
    nonfull: "非全文",
    consensus: "仅共识与指南",
    results: "条结果",
    clear: "清除筛选",
    empty: "没有匹配的记录。可尝试缩短关键词或清除筛选。",
    view: "查看条目",
    source: "原始入口",
    noFull:
      "非全文访问卡：未以摘要冒充论文，请通过 DOI、PMID 或原始入口核对正式版本。",
    originalTitle: "题名按原文保留",
  },
  en: {
    searchLabel: "Search literature",
    searchPlaceholder: "Title, DOI, PMID, journal, AAOCA, or Chinese keyword",
    population: "Population",
    access: "Access",
    kind: "Record type",
    all: "All",
    pediatric: "Pediatric",
    adult: "Adult",
    full: "Full-text record",
    nonfull: "Non-full-text",
    consensus: "Consensus & guidelines only",
    results: "results",
    clear: "Clear filters",
    empty: "No matching records. Try a shorter query or clear the filters.",
    view: "View record",
    source: "Original source",
    noFull:
      "Non-full-text access card: no abstract is presented as a paper. Verify the version of record through DOI, PMID, or the original source.",
    originalTitle: "Titles remain in their publication language",
  },
} as const;

function matchesQuery(paper: Paper, query: string) {
  if (!query) return true;
  const aliases =
    paper.category === "儿童"
      ? "儿童 儿科 小儿 pediatric paediatric child adolescent"
      : "成人 adult grown-up";
  const accessAliases = isFullText(paper)
    ? "全文 full text"
    : "非全文 not full text access card 访问卡";
  const searchable = [
    paper.title,
    paper.journal,
    paper.year,
    paper.doi,
    paper.pmid,
    paper.pmcid,
    paper.notes,
    paper.access,
    aliases,
    accessAliases,
    "AAOCA AAORCA ARCA-L 冠状动脉起源异常 先天性冠状动脉异常",
  ]
    .join(" ")
    .toLocaleLowerCase();

  return query
    .toLocaleLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((part) => searchable.includes(part));
}

export function PaperExplorer({ records }: { records: Paper[] }) {
  const [language, setLanguage] = useState<Language>("zh");
  const [query, setQuery] = useState("");
  const [population, setPopulation] = useState<Population>("all");
  const [access, setAccess] = useState<Access>("all");
  const [consensusOnly, setConsensusOnly] = useState(false);
  const t = copy[language];

  const visible = useMemo(
    () =>
      records.filter((paper) => {
        if (population === "pediatric" && paper.category !== "儿童") {
          return false;
        }
        if (population === "adult" && paper.category !== "成人") return false;
        if (access === "full" && !isFullText(paper)) return false;
        if (access === "nonfull" && isFullText(paper)) return false;
        if (consensusOnly && !isConsensus(paper)) return false;
        return matchesQuery(paper, query.trim());
      }),
    [records, query, population, access, consensusOnly],
  );

  const reset = () => {
    setQuery("");
    setPopulation("all");
    setAccess("all");
    setConsensusOnly(false);
  };

  return (
    <section className="explorer" id="library" aria-labelledby="library-title">
      <div className="explorer-heading">
        <div>
          <p className="eyebrow">Literature index · 文献索引</p>
          <h2 id="library-title">
            {language === "zh" ? "检索全部文献" : "Search the collection"}
          </h2>
          <p className="section-lede">{t.originalTitle}</p>
        </div>
        <div className="language-switch" aria-label="Language">
          <button
            type="button"
            className={language === "zh" ? "active" : ""}
            aria-pressed={language === "zh"}
            onClick={() => setLanguage("zh")}
          >
            中文
          </button>
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            aria-pressed={language === "en"}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
        </div>
      </div>

      <div className="search-panel">
        <label htmlFor="paper-search">{t.searchLabel}</label>
        <div className="search-field">
          <span aria-hidden="true">⌕</span>
          <input
            id="paper-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
            autoComplete="off"
          />
        </div>

        <div className="filter-groups">
          <fieldset>
            <legend>{t.population}</legend>
            <div className="segmented">
              {(["all", "pediatric", "adult"] as Population[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={population === value ? "active" : ""}
                  aria-pressed={population === value}
                  onClick={() => setPopulation(value)}
                >
                  {t[value]}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>{t.access}</legend>
            <div className="segmented">
              {(["all", "full", "nonfull"] as Access[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={access === value ? "active" : ""}
                  aria-pressed={access === value}
                  onClick={() => setAccess(value)}
                >
                  {t[value]}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>{t.kind}</legend>
            <button
              type="button"
              className={`toggle-filter ${consensusOnly ? "active" : ""}`}
              aria-pressed={consensusOnly}
              onClick={() => setConsensusOnly((current) => !current)}
            >
              {t.consensus}
            </button>
          </fieldset>
        </div>
      </div>

      <div className="results-bar" aria-live="polite">
        <strong>
          {visible.length} {t.results}
        </strong>
        {(query ||
          population !== "all" ||
          access !== "all" ||
          consensusOnly) && (
          <button type="button" onClick={reset}>
            {t.clear}
          </button>
        )}
      </div>

      {visible.length ? (
        <div className="paper-list">
          {visible.map((paper) => {
            const fullText = isFullText(paper);
            return (
              <article className="paper-card" key={paper.sha256}>
                <div className="paper-meta">
                  <span>{paper.year}</span>
                  <span>{paper.category === "儿童" ? t.pediatric : t.adult}</span>
                  <span
                    className={
                      fullText ? "access-badge full" : "access-badge nonfull"
                    }
                  >
                    {fullText ? t.full : t.nonfull}
                  </span>
                  {isConsensus(paper) && (
                    <span className="consensus-badge">
                      {language === "zh" ? "共识 / 指南" : "Consensus / guideline"}
                    </span>
                  )}
                </div>
                <h3>
                  <a href={`/papers/${paperSlug(paper)}`}>{paper.title}</a>
                </h3>
                <p className="journal">{paper.journal}</p>
                {!fullText && <p className="nonfull-note">{t.noFull}</p>}
                <div className="identifier-row">
                  {paper.doi && <span>DOI {paper.doi}</span>}
                  {paper.pmid && <span>PMID {paper.pmid}</span>}
                  {!paper.doi && !paper.pmid && (
                    <span>
                      {language === "zh"
                        ? "未检得 DOI / PMID"
                        : "No DOI / PMID found"}
                    </span>
                  )}
                </div>
                <div className="paper-actions">
                  <a className="primary-link" href={`/papers/${paperSlug(paper)}`}>
                    {t.view} <span aria-hidden="true">→</span>
                  </a>
                  {paper.entry_url && (
                    <a
                      href={paper.entry_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.source} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="empty-state">{t.empty}</p>
      )}
    </section>
  );
}
