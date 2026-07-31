"use client";

import { useMemo, useState } from "react";
import { getDictionary, type Language } from "../lib/i18n";
import { isConsensus, isFullText, type Paper } from "../lib/library";
import { searchPapers } from "../lib/search";
import { topics, type TopicSlug } from "../lib/topics";
import { PaperCard } from "./PaperCard";

type Population = "all" | "pediatric" | "adult";
type Access = "all" | "full" | "nonfull";
type TopicFilter = "all" | TopicSlug;

/**
 * Only `lang` crosses the server/client boundary — the dictionary is resolved
 * here because it contains functions, which are not serialisable as props.
 */
export function PaperExplorer({
  records,
  lang,
}: {
  records: Paper[];
  lang: Language;
}) {
  const dict = getDictionary(lang);
  const [query, setQuery] = useState("");
  const [population, setPopulation] = useState<Population>("all");
  const [access, setAccess] = useState<Access>("all");
  const [topic, setTopic] = useState<TopicFilter>("all");
  const [consensusOnly, setConsensusOnly] = useState(false);

  const { matches, loose } = useMemo(() => {
    const filtered = records.filter((paper) => {
      if (population === "pediatric" && paper.category !== "儿童") return false;
      if (population === "adult" && paper.category !== "成人") return false;
      if (access === "full" && !isFullText(paper)) return false;
      if (access === "nonfull" && isFullText(paper)) return false;
      if (topic !== "all" && !paper.topics.includes(topic)) return false;
      if (consensusOnly && !isConsensus(paper)) return false;
      return true;
    });

    return searchPapers(filtered, query);
  }, [records, query, population, access, topic, consensusOnly]);

  const filtersActive =
    Boolean(query) ||
    population !== "all" ||
    access !== "all" ||
    topic !== "all" ||
    consensusOnly;

  const reset = () => {
    setQuery("");
    setPopulation("all");
    setAccess("all");
    setTopic("all");
    setConsensusOnly(false);
  };

  return (
    <section className="explorer" id="library" aria-labelledby="library-title">
      <div className="explorer-heading">
        <p className="eyebrow">{dict.explorer.eyebrow}</p>
        <h2 id="library-title">{dict.explorer.heading}</h2>
        <p className="section-lede">{dict.explorer.lede}</p>
      </div>

      <div className="search-panel">
        <label htmlFor="paper-search">{dict.explorer.searchLabel}</label>
        <div className="search-field">
          <span aria-hidden="true">⌕</span>
          <input
            id="paper-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={dict.explorer.searchPlaceholder}
            autoComplete="off"
          />
        </div>

        {!query && (
          <div className="search-suggestions">
            <span>{dict.explorer.suggestionsLabel}</span>
            {dict.explorer.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setQuery(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <div className="filter-groups">
          <fieldset>
            <legend>{dict.explorer.topic}</legend>
            <div className="chip-row">
              <button
                type="button"
                className={topic === "all" ? "active" : ""}
                aria-pressed={topic === "all"}
                onClick={() => setTopic("all")}
              >
                {dict.explorer.all}
              </button>
              {topics.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  className={topic === item.slug ? "active" : ""}
                  aria-pressed={topic === item.slug}
                  onClick={() => setTopic(item.slug)}
                >
                  {item[lang].question}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>{dict.explorer.population}</legend>
            <div className="segmented">
              {(["all", "pediatric", "adult"] as Population[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={population === value ? "active" : ""}
                  aria-pressed={population === value}
                  onClick={() => setPopulation(value)}
                >
                  {dict.explorer[value]}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>{dict.explorer.access}</legend>
            <div className="segmented">
              {(["all", "full", "nonfull"] as Access[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={access === value ? "active" : ""}
                  aria-pressed={access === value}
                  onClick={() => setAccess(value)}
                >
                  {dict.explorer[value]}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>{dict.explorer.kind}</legend>
            <button
              type="button"
              className={`toggle-filter ${consensusOnly ? "active" : ""}`}
              aria-pressed={consensusOnly}
              onClick={() => setConsensusOnly((current) => !current)}
            >
              {dict.explorer.consensusOnly}
            </button>
          </fieldset>
        </div>
      </div>

      <div className="results-bar" aria-live="polite">
        <strong>{dict.explorer.results(matches.length)}</strong>
        {filtersActive && (
          <button type="button" onClick={reset}>
            {dict.explorer.clear}
          </button>
        )}
      </div>

      {loose && <p className="loose-notice">{dict.explorer.looseNotice}</p>}

      {matches.length ? (
        <div className="paper-list">
          {matches.map((paper) => (
            <PaperCard key={paper.sha256} paper={paper} dict={dict} />
          ))}
        </div>
      ) : (
        <p className="empty-state">{dict.explorer.empty}</p>
      )}
    </section>
  );
}
