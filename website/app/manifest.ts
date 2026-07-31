import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AAOCA Research Library｜冠状动脉起源异常文献库",
    short_name: "AAOCA Library",
    description:
      "Bilingual pediatric and adult AAOCA literature index with guidelines and expert consensus.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#0d3437",
    lang: "zh-CN",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
