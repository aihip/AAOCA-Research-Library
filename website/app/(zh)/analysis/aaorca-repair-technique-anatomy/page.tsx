import type { Metadata } from "next";
import { RepairTechniqueAnatomyPage } from "../../../../components/pages/analysis/RepairTechniqueAnatomy";
import { alternatesFor } from "../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../lib/analyses";

const meta = analysisBySlug("aaorca-repair-technique-anatomy");
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
    tags: ["AAORCA", "去顶", "再植", "新开口", "壁内段", "主动脉瓣交界"],
  },
};

export default function Page() {
  return <RepairTechniqueAnatomyPage lang="zh" />;
}
