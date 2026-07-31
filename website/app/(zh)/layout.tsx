import type { Metadata } from "next";
import "../globals.css";
import { HashScrollGuard } from "../../components/HashScrollGuard";
import { zh } from "../../lib/i18n/zh";
import {
  SEARCH_KEYWORDS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "../../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: zh.home.metaTitle,
    template: `%s | ${zh.site.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "AAOCA Research Library contributors" }],
  creator: "AAOCA Research Library contributors",
  publisher: "AAOCA Research Library contributors",
  keywords: SEARCH_KEYWORDS,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og.png",
        width: 1280,
        height: 640,
        alt: "AAOCA Research Library bilingual literature index",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function ChineseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <HashScrollGuard />
        {children}
      </body>
    </html>
  );
}
