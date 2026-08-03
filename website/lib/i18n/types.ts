import type { SummaryCheck } from "../library";

export type Language = "zh" | "en";

export type Dictionary = {
  lang: Language;
  htmlLang: string;
  /** Path prefix for links inside this language tree ("" for Chinese, "/en" for English). */
  basePath: string;

  site: {
    name: string;
    tagline: string;
    disclaimer: string;
    notMedicalAdvice: string;
    rightsNotice: string;
  };

  nav: {
    questions: string;
    library: string;
    about: string;
    rights: string;
    github: string;
    switchTo: string;
    switchToLabel: string;
    backToHome: string;
  };

  home: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    lede: string;
    startReading: string;
    browseLibrary: string;
    primerEyebrow: string;
    primerHeading: string;
    primerBody: string[];
    primerSourcesLabel: string;
    questionsEyebrow: string;
    questionsHeading: string;
    questionsLede: string;
    recordCount: (count: number) => string;
    statsLabel: string;
    stats: {
      total: string;
      pediatric: string;
      adult: string;
      guidance: string;
    };
    principlesEyebrow: string;
    principlesHeading: string;
    principles: { number: string; heading: string; body: string }[];
  };

  explorer: {
    eyebrow: string;
    heading: string;
    lede: string;
    searchLabel: string;
    searchPlaceholder: string;
    suggestionsLabel: string;
    suggestions: string[];
    population: string;
    access: string;
    kind: string;
    topic: string;
    all: string;
    pediatric: string;
    adult: string;
    full: string;
    nonfull: string;
    consensusOnly: string;
    results: (count: number) => string;
    clear: string;
    empty: string;
    looseNotice: string;
    originalTitle: string;
  };

  card: {
    view: string;
    source: string;
    fullBadge: string;
    nonfullBadge: string;
    consensusBadge: string;
    pediatricBadge: string;
    adultBadge: string;
    nonfullNote: string;
    noIdentifier: string;
    /**
     * Badge and explanation per check state. The badge carries "AI" in every
     * state — a reader who only glances at the pill must not come away thinking
     * a person vouched for the text.
     */
    summaryCheck: Record<SummaryCheck, { badge: string; note: string }>;
    /**
     * Standing notice above every record list. The per-card explanation lives in
     * a `title` tooltip, which touch devices never show.
     */
    summaryNotice: string;
  };

  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lede: string;
    sections: { heading: string; body: string[] }[];
  };

  topic: {
    sourcesLabel: string;
    metaTitle: (question: string) => string;
    metaDescription: (question: string) => string;
    eyebrow: string;
    recordsHeading: string;
    recordCount: (count: number) => string;
    ordering: string;
    otherQuestions: string;
    backToAll: string;
    empty: string;
  };

  detail: {
    backToAll: string;
    originalTitleLabel: string;
    summaryHeading: string;
    noSummary: string;
    populationLabel: string;
    accessLabel: string;
    pagesLabel: string;
    curatorNoteLabel: string;
    topicsLabel: string;
    accessFull: string;
    accessNonFull: string;
    nonfullHeading: string;
    nonfullBody: string;
    nonfullHowTo: string;
    identifiersEyebrow: string;
    identifiersHeading: string;
    identifiersHelp: string;
    noIdentifiers: string;
    openSource: string;
    provenanceSummary: string;
    recordPath: string;
    checksum: string;
    provenanceNote: string;
  };

  footer: {
    citation: string;
    rights: string;
    contributing: string;
    github: string;
    visitCount: string;
    visitCountLoading: string;
  };
};
