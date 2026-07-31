import type { Metadata } from "next";
import { AboutPage } from "../../../components/pages/AboutPage";
import { alternatesFor } from "../../../lib/i18n";
import { zh } from "../../../lib/i18n/zh";

export const metadata: Metadata = {
  title: zh.about.metaTitle,
  description: zh.about.metaDescription,
  alternates: alternatesFor("zh", "/about"),
};

export default function Page() {
  return <AboutPage lang="zh" />;
}
