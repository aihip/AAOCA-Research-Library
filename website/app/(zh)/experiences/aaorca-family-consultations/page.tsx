import type { Metadata } from "next";
import { ExperiencePage } from "../../../../components/pages/ExperiencePage";
import { EXPERIENCE_PATH, familyConsultationExperience } from "../../../../lib/experiences";
import { alternatesFor } from "../../../../lib/i18n";

export const metadata: Metadata = {
  title: familyConsultationExperience.title.zh,
  description: familyConsultationExperience.summary.zh,
  alternates: alternatesFor("zh", EXPERIENCE_PATH),
};

export default function Page() {
  return <ExperiencePage lang="zh" />;
}
