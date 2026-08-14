import type { Metadata } from "next";
import { ProximalDiameterGeometryPage } from "../../../../components/pages/analysis/ProximalDiameterGeometry";
import { alternatesFor } from "../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../lib/analyses";

const meta = analysisBySlug("aaorca-proximal-diameter-geometry");
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
    tags: ["AAORCA", "冠脉几何", "面积狭窄", "开口短轴", "Z 值", "CTA 定量"],
  },
};

export default function Page() {
  return <ProximalDiameterGeometryPage lang="zh" />;
}
