import type { Metadata } from "next";
import { DecisionModelPage } from "../../../../components/pages/analysis/DecisionModel";
import { alternatesFor } from "../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../lib/analyses";

const meta = analysisBySlug("aaorca-decision-model");
const path = analysisPath(meta.slug);

export const metadata: Metadata = {
  title: meta.zh.title,
  description: meta.zh.summary,
  alternates: alternatesFor("zh", path),
  openGraph: {
    type: "article",
    title: meta.zh.title,
    description: meta.zh.summary,
    publishedTime: meta.date,
    modifiedTime: meta.date,
    tags: ["AAORCA", "危险分层", "负荷影像", "CPET", "手术指征", "共同决策"],
  },
};

export default function Page() {
  return <DecisionModelPage lang="zh" />;
}
