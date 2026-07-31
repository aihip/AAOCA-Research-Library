import type { Metadata } from "next";
import { HomePage } from "../../../components/pages/HomePage";
import { alternatesFor } from "../../../lib/i18n";
import { en } from "../../../lib/i18n/en";

export const metadata: Metadata = {
  title: en.home.metaTitle,
  description: en.home.metaDescription,
  alternates: alternatesFor("en", "/"),
};

export default function Page() {
  return <HomePage lang="en" />;
}
