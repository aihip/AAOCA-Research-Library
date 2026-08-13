import type { Metadata } from "next";
import { AnalysisPage } from "../../../../components/pages/AnalysisPage";
import { alternatesFor } from "../../../../lib/i18n";
import { ANALYSIS_PATH, latestAnalysis } from "../../../../lib/analyses";

export const metadata: Metadata = {
  title: latestAnalysis.zh.title,
  description: latestAnalysis.zh.summary,
  alternates: alternatesFor("zh", ANALYSIS_PATH),
  openGraph: {
    type: "article",
    title: latestAnalysis.zh.title,
    description: latestAnalysis.zh.summary,
    publishedTime: latestAnalysis.date,
    modifiedTime: latestAnalysis.date,
    tags: ["AAORCA", "儿童", "手术指征", "去顶", "再植", "缺血评估"],
  },
};

export default function Page() {
  return <AnalysisPage lang="zh" />;
}
