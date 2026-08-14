import type { Language } from "./i18n";

type LocalizedSummary = {
  label: string;
  title: string;
  summary: string;
  read: string;
  timelineLabel: string;
};

export type AnalysisMeta = {
  slug: string;
  date: string;
  /** Rendered in the byline; kept per language because the formats differ. */
  dateLabel: { zh: string; en: string };
  readingLabel: { zh: string; en: string };
  zh: LocalizedSummary;
  en: LocalizedSummary;
};

/**
 * Newest first. The first entry is what the landing page promotes and what the
 * navigation calls "the latest analysis"; the rest stay reachable from the
 * analysis index so nothing published earlier disappears.
 */
export const analyses: AnalysisMeta[] = [
  {
    slug: "aaorca-repair-technique-anatomy",
    date: "2026-08-14",
    dateLabel: { zh: "2026 年 8 月 14 日", en: "14 August 2026" },
    readingLabel: { zh: "约 14 分钟", en: "14 min read" },
    zh: {
      label: "证据分析",
      title: "术式跟着壁内段走：去顶、再植与新开口重建的分工",
      summary:
        "壁内段有多长、走在主动脉瓣交界上方还是下方，比“哪种术式更先进”更能决定该做哪一种手术。",
      read: "阅读全文",
      timelineLabel: "证据时间线",
    },
    en: {
      label: "Evidence analysis",
      title: "Let the intramural segment choose: unroofing, reimplantation, or a neo-ostium",
      summary:
        "How long the intramural segment is, and whether it runs above or below the aortic valve commissure, decides the operation more than any ranking of techniques.",
      read: "Read the analysis",
      timelineLabel: "Evidence timeline",
    },
  },
  {
    slug: "aaorca-proximal-diameter-geometry",
    date: "2026-08-14",
    dateLabel: { zh: "2026 年 8 月 14 日", en: "14 August 2026" },
    readingLabel: { zh: "约 12 分钟", en: "12 min read" },
    zh: {
      label: "证据分析",
      title: "一个“最窄 1.3 mm”能说明什么，又不能说明什么",
      summary:
        "同一个最小直径，可能对应 30% 也可能对应 70% 的面积丢失。真正能定量的是面积、椭圆度和自身参照，而不是一个孤立的毫米数。",
      read: "阅读全文",
      timelineLabel: "证据时间线",
    },
    en: {
      label: "Evidence analysis",
      title: "What a single “1.3 mm minimum diameter” can and cannot tell you",
      summary:
        "The same minimum diameter can mean a 30% or a 70% loss of lumen area. Area, ellipticity, and a self-referenced stenosis ratio are measurable; one millimetre figure is not.",
      read: "Read the analysis",
      timelineLabel: "Evidence timeline",
    },
  },
  {
    slug: "aaorca-decision-model",
    date: "2026-08-14",
    dateLabel: { zh: "2026 年 8 月 14 日", en: "14 August 2026" },
    readingLabel: { zh: "约 13 分钟", en: "13 min read" },
    zh: {
      label: "证据分析",
      title: "从查资料到决策建模：哪些变量真的改变结论",
      summary:
        "把 R-AAOCA 的决策变量按证据强度排开，再排出检查顺序，会发现大部分争论卡在同一个缺口：负荷状态下到底有没有缺血。",
      read: "阅读全文",
      timelineLabel: "证据时间线",
    },
    en: {
      label: "Evidence analysis",
      title: "From reading papers to modelling the decision: which variables actually move it",
      summary:
        "Ranking the decision variables by evidential strength, then ordering the tests, shows most disagreement resting on one gap: whether ischemia appears under stress.",
      read: "Read the analysis",
      timelineLabel: "Evidence timeline",
    },
  },
  {
    slug: "aaorca-anatomy-versus-physiology",
    date: "2026-08-14",
    dateLabel: { zh: "2026 年 8 月 14 日", en: "14 August 2026" },
    readingLabel: { zh: "约 13 分钟", en: "13 min read" },
    zh: {
      label: "证据分析",
      title: "高危解剖不等于高危生理：R-AAOCA 的风险到底写在哪里",
      summary:
        "壁内段、主肺动脉间走行和一个小直径都是线索，但没有一项单独预测缺血。近年的证据把重心从 CTA 外观移到负荷状态下的血流。",
      read: "阅读全文",
      timelineLabel: "证据时间线",
    },
    en: {
      label: "Evidence analysis",
      title: "High-risk anatomy is not high-risk physiology: where R-AAOCA risk actually lives",
      summary:
        "An intramural course, an interarterial course, and a small diameter are all clues, yet none predicts ischemia on its own. Recent evidence shifts the weight from CTA appearance to flow under stress.",
      read: "Read the analysis",
      timelineLabel: "Evidence timeline",
    },
  },
  {
    slug: "aaorca-evidence-20-studies",
    date: "2026-08-13",
    dateLabel: { zh: "2026 年 8 月 13 日", en: "13 August 2026" },
    readingLabel: { zh: "约 15 分钟", en: "15 min read" },
    zh: {
      label: "证据分析",
      title: "20 篇证据摊平：儿童 AAORCA 到底谁需要手术？",
      summary:
        "把真实世界队列、手术系列和功能学研究分开看，答案不是“都做”或“都不做”，而是识别那一小部分风险真正高于手术代价的孩子。",
      read: "阅读全文",
      timelineLabel: "证据时间线",
    },
    en: {
      label: "Evidence analysis",
      title: "Twenty studies side by side: who with right-AAOCA actually needs surgery?",
      summary:
        "Separating real-world cohorts, surgical series, and functional studies changes the question from “operate or observe?” to “whose natural-history risk is likely to exceed the cost of repair?”",
      read: "Read the analysis",
      timelineLabel: "Evidence timeline",
    },
  },
];

export const ANALYSIS_SLUGS = analyses.map((analysis) => analysis.slug);

export const ANALYSIS_INDEX_PATH = "/analysis";

export function analysisPath(slug: string) {
  return `${ANALYSIS_INDEX_PATH}/${slug}`;
}

export const latestAnalysis = analyses[0];

/** Kept for the landing page's promoted link. */
export const ANALYSIS_PATH = analysisPath(latestAnalysis.slug);

export function analysisBySlug(slug: string): AnalysisMeta {
  const found = analyses.find((analysis) => analysis.slug === slug);
  if (!found) {
    throw new Error(`unknown analysis: ${slug}`);
  }
  return found;
}

export const evidenceTimeline = [
  {
    year: "2014",
    zh: "去顶术与分层术式的早期成熟系列",
    en: "Maturing unroofing and anatomy-led repair series",
  },
  {
    year: "2020",
    zh: "CHSS 多中心数据补上手术代价",
    en: "CHSS multicentre data quantify the cost of repair",
  },
  {
    year: "2022",
    zh: "纯 AAORCA 队列显示选择性手术",
    en: "An AAORCA-only cohort demonstrates selective surgery",
  },
  {
    year: "2025–26",
    zh: "儿童真实世界队列与动态功能学证据汇合",
    en: "Pediatric real-world cohorts meet dynamic physiology",
  },
] as const;

export function analysisSummary(lang: Language) {
  return latestAnalysis[lang];
}
