import type { Metadata } from "next";
import { AnalysisIndexPage } from "../../../components/pages/AnalysisIndexPage";
import { alternatesFor } from "../../../lib/i18n";
import { ANALYSIS_INDEX_PATH } from "../../../lib/analyses";

export const metadata: Metadata = {
  title: "证据分析",
  description: "围绕冠状动脉起源异常的具体问题，把相关研究的病例数、设计和局限摆在一起。",
  alternates: alternatesFor("zh", ANALYSIS_INDEX_PATH),
};

export default function Page() {
  return <AnalysisIndexPage lang="zh" />;
}
