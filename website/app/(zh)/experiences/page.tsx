import type { Metadata } from "next";
import { ExperienceIndexPage } from "../../../components/pages/ExperienceIndexPage";
import { experienceIndexCopy, EXPERIENCE_INDEX_PATH } from "../../../lib/experiences";
import { alternatesFor } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: experienceIndexCopy.zh.metaTitle,
  description: experienceIndexCopy.zh.metaDescription,
  alternates: alternatesFor("zh", EXPERIENCE_INDEX_PATH),
};

export default function Page() {
  return <ExperienceIndexPage lang="zh" />;
}
