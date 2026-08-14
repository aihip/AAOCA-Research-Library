import type { Metadata } from "next";
import { ConservativeSurveillancePage } from "../../../../components/pages/analysis/ConservativeSurveillance";
import { alternatesFor } from "../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../lib/analyses";

const meta = analysisBySlug("aaorca-conservative-surveillance");
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
    tags: ["AAORCA", "保守观察", "主动监测", "随访方案", "心肺运动试验", "负荷 CMR", "运动建议"],
  },
};

export default function Page() {
  return <ConservativeSurveillancePage lang="zh" />;
}
