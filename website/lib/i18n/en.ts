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
    about: "About",
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
    eyebrow: "Updated 2026-08-13",
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
      "Which artery is affected matters a great deal. The Chinese expert consensus records that anomalous origin of the right coronary artery is far more common than the left, by roughly six to one, while sudden cardiac death occurs 1.8 to 4.7 times more often with an anomalous left coronary artery. So the first thing a clinician establishes is which artery is involved and where it runs.",
      "Many people never have symptoms and are found incidentally during testing done for another reason. Others experience chest pain, breathlessness on exertion, or fainting. One thing needs saying plainly: no symptoms does not mean no risk — the same consensus cites figures showing that between 38% and 66% of patients had never had any related symptom before the sudden death event. \"He has always been fine\" is not a reason to relax.",
      "The other side of this is that the word \"sudden death\" should not flatten you either. The AATS expert consensus notes that among young people who do not take part in competitive sport, the absolute rate of such events is exceedingly low; the risk concentrates in particular anatomical types combined with high-intensity exercise. How high the risk is for one individual depends on the anatomy, needs imaging to assess, and varies considerably between people.",
      "The questions below are the ones families ask most often. Under each are the relevant records — they show what the research currently reports, but they cannot substitute for your clinician's assessment of your own situation.",
    ],
    primerSourcesLabel:
      "This section is written from the following consensus documents and guidelines — you can check it against them:",

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
    summaryCheck: {
      source: {
        badge: "AI-checked against full text",
        note: "Drafted by AI and checked line by line against the full text held here. No medical professional was involved.",
      },
      metadata: {
        badge: "AI, metadata only",
        note: "The full text is not held here, so this summary rests on the title and curator note alone and could not be compared with the article. No medical professional was involved.",
      },
      draft: {
        badge: "AI draft, unchecked",
        note: "Drafted by AI from the record metadata and not checked against anything. No medical professional was involved.",
      },
    },
    summaryNotice:
      "The Chinese summaries below are drafted by AI and checked by AI. No medical professional was involved. The tag after each one states how far it was checked.",
  },

  about: {
    metaTitle: "About this library | AAOCA Research Library",
    metaDescription:
      "Who compiled this library and why, how the records were selected, where the Chinese summaries come from, and what this site cannot do.",
    eyebrow: "About",
    title: "Who made this",
    lede: "If you are going to act on anything here, you are entitled to know where it came from first.",
    sections: [
      {
        heading: "Who compiled it",
        body: [
          "This library was compiled by a patient's family member. I am not a doctor, not a medical researcher, and have no medical training of any kind.",
          "After the diagnosis in my family, I found almost nothing reliable about anomalous aortic origin of a coronary artery in Chinese, and what research existed was almost entirely in English and unreadable to a layperson. I built this to understand it myself, then published it in case it helps someone else.",
        ],
      },
      {
        heading: "How the records were selected",
        body: [
          "There are 74 deduplicated records covering pediatric and adult studies, imaging and risk stratification, sports participation, surgical management, and expert consensus and clinical guidelines. Each keeps its original title, journal, year, and DOI, PMID, or PMCID where one exists, so you can go back to the source and check.",
          "To be clear: this is not a systematic review. The scope reflects what was found and retained during compilation. It is not exhaustive and does not represent the whole of the evidence. A question with many records is not more important than one with few, and few records does not mean lower risk.",
        ],
      },
      {
        heading: "Where the Chinese titles and summaries come from",
        body: [
          "Every Chinese title and plain-language summary on this site was drafted by AI from the record metadata. The checking is also done by AI, line by line against the full text held here. No medical professional was involved at any stage, and no clinician has reviewed any of this text.",
          "Each summary carries a tag stating how far it was checked: checked against the full text; based on the title and curator note only, because the full text is not held here and no comparison was possible; or drafted and not yet checked.",
          "These tags are not boilerplate. Where a summary conflicts with what your clinician tells you, your clinician is right, and corrections are welcome via GitHub.",
        ],
      },
      {
        heading: "What this site cannot do",
        body: [
          "It cannot tell you whether to have surgery, whether sport is safe, or how high the risk is. Those depend on the specific anatomy, symptoms, and test results, and only a clinician who has seen the imaging can judge them.",
          "It is not a substitute for the articles. Most records are not held here in full, and those that are are English-language clinical papers. A summary only helps you decide whether a paper is worth raising with your clinician.",
          "It is not guaranteed to stay current. The literature was compiled in August 2026; anything published since is absent.",
          "It collects no personal information and has no accounts, comments, or uploads. Please do not put names, medical record numbers, or other health information in a GitHub issue.",
        ],
      },
      {
        heading: "How to use it well",
        body: [
          "Pick the few records closest to your situation, note the DOI or PMID, and take them to the appointment — printed or on your phone — and ask whether the situation they describe resembles yours. Treat it as a list to talk through with a clinician, not as an answer.",
        ],
      },
    ],
  },

  topic: {
    sourcesLabel: "The guidance behind this introduction:",
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
    visitCount: "Page views",
    visitCountLoading: "Loading page view count…",
  },
};
