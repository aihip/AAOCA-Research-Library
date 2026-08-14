import type { Metadata } from "next";
import { UpdateHistoryPage } from "../../../../components/pages/UpdateHistoryPage";
import { alternatesFor } from "../../../../lib/i18n";
import { UPDATE_HISTORY_PATH } from "../../../../lib/updates";

export const metadata: Metadata = {
  title: "Update history",
  description: "Major content, evidence-analysis, and product updates to the AAOCA Research Library.",
  alternates: alternatesFor("en", UPDATE_HISTORY_PATH),
};

export default function Page() {
  return <UpdateHistoryPage lang="en" />;
}
