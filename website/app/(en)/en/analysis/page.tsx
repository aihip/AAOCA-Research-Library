import type { Metadata } from "next";
import { AnalysisIndexPage } from "../../../../components/pages/AnalysisIndexPage";
import { alternatesFor } from "../../../../lib/i18n";
import { ANALYSIS_INDEX_PATH } from "../../../../lib/analyses";

export const metadata: Metadata = {
  title: "Evidence analysis",
  description: "Analyses of specific questions in anomalous aortic origin of a coronary artery, with each study's patient counts, design, and limits stated.",
  alternates: alternatesFor("en", ANALYSIS_INDEX_PATH),
};

export default function Page() {
  return <AnalysisIndexPage lang="en" />;
}
