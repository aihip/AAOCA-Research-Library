import type { Metadata } from "next";
import { ExperienceIndexPage } from "../../../../components/pages/ExperienceIndexPage";
import { experienceIndexCopy, EXPERIENCE_INDEX_PATH } from "../../../../lib/experiences";
import { alternatesFor } from "../../../../lib/i18n";

export const metadata: Metadata = {
  title: experienceIndexCopy.en.metaTitle,
  description: experienceIndexCopy.en.metaDescription,
  alternates: alternatesFor("en", EXPERIENCE_INDEX_PATH),
};

export default function Page() {
  return <ExperienceIndexPage lang="en" />;
}
