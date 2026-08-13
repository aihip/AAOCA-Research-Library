import type { Metadata } from "next";
import { AnalysisPage } from "../../../../../components/pages/AnalysisPage";
import { alternatesFor } from "../../../../../lib/i18n";
import { ANALYSIS_PATH, latestAnalysis } from "../../../../../lib/analyses";

export const metadata: Metadata = {
  title: latestAnalysis.en.title,
  description: latestAnalysis.en.summary,
  alternates: alternatesFor("en", ANALYSIS_PATH),
  openGraph: {
    type: "article",
    title: latestAnalysis.en.title,
    description: latestAnalysis.en.summary,
    publishedTime: latestAnalysis.date,
    modifiedTime: latestAnalysis.date,
    tags: ["AAORCA", "pediatric", "surgery", "unroofing", "reimplantation", "ischemia"],
  },
};

export default function Page() {
  return <AnalysisPage lang="en" />;
}
