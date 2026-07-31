import type { Metadata } from "next";
import "./globals.css";
import {
  SEARCH_KEYWORDS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AAOCA Research Library｜冠状动脉起源异常文献库",
    template: "%s | AAOCA Research Library",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "AAOCA Research Library contributors" }],
  creator: "AAOCA Research Library contributors",
  publisher: "AAOCA Research Library contributors",
  keywords: SEARCH_KEYWORDS,
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    title: "AAOCA Research Library｜双语文献库",
    description: SITE_DESCRIPTION,
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
    title: "AAOCA Research Library｜双语文献库",
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
