import type { Dictionary } from "./types";

export const en: Dictionary = {
  lang: "en",
  htmlLang: "en",
  basePath: "/en",

  site: {
    name: "AAOCA Research Library",
    tagline: "A literature index for patients and families",
    disclaimer:
      "This site organises published research to help you talk with your clinician. It does not replace medical diagnosis or advice.",
    notMedicalAdvice: "Literature discovery and research organisation—not medical advice.",
    rightsNotice:
      "Article rights remain with their authors, journals, or other rightsholders. Use GitHub Issues for copyright or correction requests; do not submit patient information.",
  },

  nav: {
    questions: "Questions",
    library: "All records",
    rights: "Rights",
    github: "GitHub",
    switchTo: "中文",
    switchToLabel: "切换到中文",
    backToHome: "Back to home",
  },

  home: {
    metaTitle: "AAOCA for patients and families: an evidence library",
    metaDescription:
      "What anomalous aortic origin of a coronary artery (AAOCA / AAORCA) is, how serious it is, which tests are used, whether sport can continue, and when surgery is considered. Published research organised around the questions families ask.",
    eyebrow: "Updated 2026-07-31",
    title: "Anomalous aortic origin of a coronary artery",
    subtitle: "AAOCA / AAORCA",
    lede: "If you or someone in your family has just been given this diagnosis, this library organises the published research around the questions you are most likely to ask.",
    startReading: "Start with the basics",
    browseLibrary: "Go straight to the records",

    primerEyebrow: "Start here",
    primerHeading: "What this condition is",
    primerBody: [
      "The heart needs its own blood supply, delivered by the two coronary arteries. They arise from the root of the aorta, one on each side, each from its own fixed position.",
      "Anomalous aortic origin of a coronary artery (AAOCA) means one of those arteries begins in the wrong place — for example, an artery that should arise on the left instead arises on the right. If that vessel then runs between the aorta and the pulmonary artery, the chance of it being compressed increases. This is a difference in anatomy present from birth, not an illness acquired later, and it is not contagious.",
      "Many people never have symptoms and are found incidentally during testing done for another reason. Others experience chest pain, breathlessness on exertion, or fainting, and in a small number of cases the condition is linked to cardiac events during intense exercise. Risk depends on the specific anatomy, needs imaging to assess, and varies considerably between individuals.",
      "The questions below are the ones families ask most often. Under each are the relevant records — they show what the research currently reports, but they cannot substitute for your clinician's assessment of your own situation.",
    ],

    questionsEyebrow: "Browse by question",
    questionsHeading: "What you may want to ask",
    questionsLede:
      "Each question opens with a short note on how far the evidence goes and where it remains unsettled.",
    recordCount: (count) => `${count} records`,

    statsLabel: "Collection at a glance",
    stats: {
      total: "unique records",
      pediatric: "pediatric",
      adult: "adult",
      guidance: "consensus & guidelines",
    },

    principlesEyebrow: "Curation principles",
    principlesHeading: "Traceable, verifiable, honest about access",
    principles: [
      {
        number: "01",
        heading: "Pediatric and adult kept apart",
        body: "Mixed-age studies are assigned once, with the rationale retained in the source index.",
      },
      {
        number: "02",
        heading: "Guidance stands on its own",
        body: "Consensus statements and clinical guidelines remain independently searchable, because they are what clinicians rely on.",
      },
      {
        number: "03",
        heading: "Missing full text is stated plainly",
        body: "Records without full text are marked as such and point to a lawful source. No abstract is ever presented as the paper.",
      },
    ],
  },

  explorer: {
    eyebrow: "All records",
    heading: "Search the collection",
    lede: "Titles remain in their publication language.",
    searchLabel: "Search literature",
    searchPlaceholder: "Try “sports”, “surgery”, “CT”, or enter a DOI or PMID",
    suggestionsLabel: "Try searching",
    suggestions: ["sports", "surgery outcomes", "CT angiography", "sudden death", "pediatric", "guidelines"],
    population: "Population",
    access: "Full text available",
    kind: "Record type",
    topic: "Question",
    all: "All",
    pediatric: "Pediatric",
    adult: "Adult",
    full: "Full text here",
    nonfull: "Not held here",
    consensusOnly: "Consensus & guidelines only",
    results: (count) => `${count} results`,
    clear: "Clear filters",
    empty: "No matching records. Try a shorter query or clear the filters.",
    looseNotice: "Nothing matched every word. These are partial matches:",
    originalTitle: "Titles remain in their publication language",
  },

  card: {
    view: "View record",
    source: "Original source",
    fullBadge: "Full text here",
    nonfullBadge: "Full text not held here",
    consensusBadge: "Consensus / guideline",
    pediatricBadge: "Pediatric",
    adultBadge: "Adult",
    nonfullNote: "Bibliographic record only — the full text must be obtained from the publisher.",
    noIdentifier: "No DOI / PMID found",
    draftBadge: "AI draft",
    draftTitle: "This summary was drafted by AI from the record metadata and has not yet been checked by a person.",
  },

  topic: {
    metaTitle: (question) => `${question} | AAOCA Research Library`,
    metaDescription: (question) =>
      `Published research on anomalous aortic origin of a coronary artery (AAOCA / AAORCA), organised around the question: ${question}.`,
    eyebrow: "Common questions",
    recordsHeading: "Related records",
    recordCount: (count) => `${count}`,
    ordering: "Consensus and guidelines first; records without full text last.",
    otherQuestions: "Other questions",
    backToAll: "← Back to home",
    empty: "No records under this question yet.",
  },

  detail: {
    backToAll: "← All records",
    originalTitleLabel: "Original title",
    summaryHeading: "What this study reports",
    noSummary: "No plain-language summary yet. The original title and the source links below still apply.",
    populationLabel: "Population",
    accessLabel: "Access status",
    pagesLabel: "Local pages",
    curatorNoteLabel: "Curator note",
    topicsLabel: "Related questions",
    accessFull: "Full text here",
    accessNonFull: "Full text not held here",
    nonfullHeading: "The full text is not held here",
    nonfullBody:
      "Because of a paywall, a login requirement, or source restrictions, this record keeps only bibliographic information and a lawful entry point. No abstract is presented as the paper.",
    nonfullHowTo:
      "Use the DOI or PMID below to request the article through your clinician, a hospital library, or a university library.",
    identifiersEyebrow: "Source links",
    identifiersHeading: "How to find the original",
    identifiersHelp:
      "These identifiers are the article's unique reference numbers. Give one to a clinician or librarian and they can retrieve exactly this paper.",
    noIdentifiers: "No DOI, PMID, or PMCID was found by the curation date.",
    openSource: "Open the original source",
    provenanceSummary: "Repository provenance (file path and checksum)",
    recordPath: "File path",
    checksum: "SHA-256 checksum",
    provenanceNote:
      "Path and checksum support provenance; they do not grant rights in third-party content.",
  },

  footer: {
    citation: "Citation",
    rights: "Rights",
    contributing: "Contributing",
    github: "GitHub",
  },
};
