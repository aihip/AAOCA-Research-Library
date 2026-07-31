import type { Metadata } from "next";
import { HomePage } from "../../components/pages/HomePage";
import { alternatesFor } from "../../lib/i18n";
import { zh } from "../../lib/i18n/zh";

export const metadata: Metadata = {
  title: zh.home.metaTitle,
  description: zh.home.metaDescription,
  alternates: alternatesFor("zh", "/"),
};

export default function Page() {
  return <HomePage lang="zh" />;
}
