import type { Metadata } from "next";
import { CareInChinaPage } from "../../../components/pages/CareInChinaPage";
import { CARE_IN_CHINA_PATH, careInChinaCopy } from "../../../lib/care";
import { alternatesFor } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: careInChinaCopy.zh.metaTitle,
  description: careInChinaCopy.zh.metaDescription,
  alternates: alternatesFor("zh", CARE_IN_CHINA_PATH),
};

export default function Page() {
  return <CareInChinaPage lang="zh" />;
}
