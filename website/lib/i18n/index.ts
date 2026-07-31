import { en } from "./en";
import type { Dictionary, Language } from "./types";
import { zh } from "./zh";

export type { Dictionary, Language } from "./types";

const dictionaries: Record<Language, Dictionary> = { zh, en };

export function getDictionary(lang: Language): Dictionary {
  return dictionaries[lang];
}

export function otherLanguage(lang: Language): Language {
  return lang === "zh" ? "en" : "zh";
}

/** Builds an in-tree href: href(dict, "/topics/sports") -> "/en/topics/sports". */
export function href(dict: Dictionary, path: string): string {
  if (path === "/") return dict.basePath || "/";
  return `${dict.basePath}${path}`;
}

/**
 * Canonical plus real hreflang alternates for one page. Replaces the previous
 * declaration that pointed both zh-CN and en at "/", which told crawlers nothing.
 */
export function alternatesFor(lang: Language, path: string) {
  const zhUrl = path === "/" ? "/" : path;
  const enUrl = path === "/" ? "/en" : `/en${path}`;

  return {
    canonical: lang === "zh" ? zhUrl : enUrl,
    languages: {
      "zh-CN": zhUrl,
      en: enUrl,
      "x-default": zhUrl,
    },
  };
}

/** The same page in the other language tree. */
export function counterpartHref(lang: Language, path: string): string {
  const target = otherLanguage(lang);
  const base = target === "en" ? "/en" : "";
  if (path === "/") return base || "/";
  return `${base}${path}`;
}
