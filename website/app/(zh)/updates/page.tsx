import type { Metadata } from "next";
import { UpdateHistoryPage } from "../../../components/pages/UpdateHistoryPage";
import { alternatesFor } from "../../../lib/i18n";
import { UPDATE_HISTORY_PATH } from "../../../lib/updates";

export const metadata: Metadata = {
  title: "更新历史",
  description: "冠状动脉起源异常文献库的内容、证据分析与网站功能更新记录。",
  alternates: alternatesFor("zh", UPDATE_HISTORY_PATH),
};

export default function Page() {
  return <UpdateHistoryPage lang="zh" />;
}
