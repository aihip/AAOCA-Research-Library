import type { Metadata } from "next";
import { AorcaHowSeriousPage } from "../../../../components/pages/analysis/AorcaHowSerious";
import { alternatesFor } from "../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../lib/analyses";

const meta = analysisBySlug("aaorca-how-serious");
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
    tags: ["AAORCA", "右冠状动脉起源异常", "壁内段", "猝死风险", "手术指征", "运动限制"],
  },
};

export default function Page() {
  return <AorcaHowSeriousPage lang="zh" />;
}
