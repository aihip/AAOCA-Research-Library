import synonymTable from "./synonyms.json";

/**
 * Maps the words patients and families actually type onto the vocabulary that
 * appears in the record metadata. Without this, a search for "开刀" or "猝死"
 * returns nothing even though a third of the collection is about surgery.
 *
 * The table lives in `synonyms.json` so the test suite can assert against the
 * same source the runtime uses.
 */
const SYNONYMS = synonymTable as Record<string, string[]>;

const HAS_CJK = /[一-鿿]/;

/** Chinese keys only — a Latin key like "ct" would match inside "structure". */
const CJK_KEYS = Object.keys(SYNONYMS).filter((key) => HAS_CJK.test(key));

/**
 * Returns the term itself plus every known alias, all lowercased.
 * A record matches the term if it contains any one of them.
 *
 * Chinese is written without spaces, so a query arrives as a single compound
 * token — "手术效果" rather than "手术 效果". When the whole token is not a key,
 * fall back to every Chinese key contained within it, so the compound still
 * resolves instead of returning nothing.
 */
export function expandTerm(term: string): string[] {
  const normalized = term.toLocaleLowerCase();
  const aliases = new Set<string>([normalized]);

  const exact = SYNONYMS[normalized];
  if (exact) {
    for (const alias of exact) aliases.add(alias.toLocaleLowerCase());
    return [...aliases];
  }

  for (const key of CJK_KEYS) {
    if (!normalized.includes(key)) continue;
    aliases.add(key);
    for (const alias of SYNONYMS[key]) aliases.add(alias.toLocaleLowerCase());
  }

  return [...aliases];
}
