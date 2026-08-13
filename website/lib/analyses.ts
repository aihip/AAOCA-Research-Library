import type { Language } from "./i18n";

export const ANALYSIS_SLUG = "aaorca-evidence-20-studies";
export const ANALYSIS_PATH = `/analysis/${ANALYSIS_SLUG}`;

type LocalizedSummary = {
  label: string;
  title: string;
  summary: string;
  read: string;
  timelineLabel: string;
};

export const latestAnalysis: {
  slug: string;
  date: string;
  zh: LocalizedSummary;
  en: LocalizedSummary;
} = {
  slug: ANALYSIS_SLUG,
  date: "2026-08-13",
  zh: {
    label: "最新分析",
    title: "20 篇证据摊平：儿童 AAORCA 到底谁需要手术？",
    summary:
      "把真实世界队列、手术系列和功能学研究分开看，答案不是“都做”或“都不做”，而是识别那一小部分风险真正高于手术代价的孩子。",
    read: "阅读全文",
    timelineLabel: "证据时间线",
  },
  en: {
    label: "Latest analysis",
    title: "Twenty studies side by side: who with right-AAOCA actually needs surgery?",
    summary:
      "Separating real-world cohorts, surgical series, and functional studies changes the question from “operate or observe?” to “whose natural-history risk is likely to exceed the cost of repair?”",
    read: "Read the analysis",
    timelineLabel: "Evidence timeline",
  },
};

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
