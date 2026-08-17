import type { Metadata } from "next";
import { CareInChinaPage } from "../../../../components/pages/CareInChinaPage";
import { CARE_IN_CHINA_PATH, careInChinaCopy } from "../../../../lib/care";
import { alternatesFor } from "../../../../lib/i18n";

export const metadata: Metadata = {
  title: careInChinaCopy.en.metaTitle,
  description: careInChinaCopy.en.metaDescription,
  alternates: alternatesFor("en", CARE_IN_CHINA_PATH),
};

export default function Page() {
  return <CareInChinaPage lang="en" />;
}
