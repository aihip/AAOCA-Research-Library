import type { Metadata } from "next";
import { AboutPage } from "../../../../components/pages/AboutPage";
import { alternatesFor } from "../../../../lib/i18n";
import { en } from "../../../../lib/i18n/en";

export const metadata: Metadata = {
  title: en.about.metaTitle,
  description: en.about.metaDescription,
  alternates: alternatesFor("en", "/about"),
};

export default function Page() {
  return <AboutPage lang="en" />;
}
