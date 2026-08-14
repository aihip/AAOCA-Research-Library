import type { Metadata } from "next";
import { AnatomyVersusPhysiologyPage } from "../../../../components/pages/analysis/AnatomyVersusPhysiology";
import { alternatesFor } from "../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../lib/analyses";

const meta = analysisBySlug("aaorca-anatomy-versus-physiology");
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
    tags: ["AAORCA", "壁内段", "缺血评估", "手术指征", "主动脉瓣反流"],
  },
};

export default function Page() {
  return <AnatomyVersusPhysiologyPage lang="zh" />;
}
