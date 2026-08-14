import { en } from "./en";
import type { Dictionary, Language } from "./types";
import { zh } from "./zh";
import { SITE_URL } from "../site";

export type { Dictionary, Language } from "./types";

const dictionaries: Record<Language, Dictionary> = { zh, en };

export function getDictionary(lang: Language): Dictionary {
  return dictionaries[lang];
}

export function otherLanguage(lang: Language): Language {
  return lang === "zh" ? "en" : "zh";
}

/**
 * Every exported page is written as <path>/index.html, and the host answers the
 * slashless form with a 308 to the slashed one. Emitting the slash ourselves
 * keeps canonical URLs, hreflang alternates, the sitemap, JSON-LD, and internal
 * links pointing at the address that actually returns 200, instead of one that
 * redirects. Fragments and query strings are preserved after the slash.
 */
export function withTrailingSlash(path: string): string {
  if (!path.startsWith("/")) return path;

  const suffixAt = path.search(/[?#]/);
  const pathname = suffixAt === -1 ? path : path.slice(0, suffixAt);
  const suffix = suffixAt === -1 ? "" : path.slice(suffixAt);

  return pathname.endsWith("/") ? `${pathname}${suffix}` : `${pathname}/${suffix}`;
}

/** Absolute, slash-terminated URL for a language-prefixed path. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${withTrailingSlash(path || "/")}`;
}

/** Builds an in-tree href: href(dict, "/topics/sports") -> "/en/topics/sports/". */
export function href(dict: Dictionary, path: string): string {
  if (path === "/") return withTrailingSlash(dict.basePath || "/");
  return withTrailingSlash(`${dict.basePath}${path}`);
}

/**
 * Canonical plus real hreflang alternates for one page. Replaces the previous
 * declaration that pointed both zh-CN and en at "/", which told crawlers nothing.
 */
export function alternatesFor(lang: Language, path: string) {
  const zhUrl = withTrailingSlash(path === "/" ? "/" : path);
  const enUrl = withTrailingSlash(path === "/" ? "/en" : `/en${path}`);

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
  if (path === "/") return withTrailingSlash(base || "/");
  return withTrailingSlash(`${base}${path}`);
}
