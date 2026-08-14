const contentPathPattern =
  /^(?:about|analysis(?:\/[a-z0-9-]+)?|topics\/[a-z0-9-]+|papers\/[a-z0-9-]+)$/;

export function normalizePagePath(path: string): string | null {
  const normalized = path.replace(/^\//, "").replace(/\/$/, "");

  if (normalized === "" || normalized === "en") {
    return normalized === "" ? "/" : `/${normalized}`;
  }

  const contentPath = normalized.startsWith("en/")
    ? normalized.slice(3)
    : normalized;

  if (!contentPathPattern.test(contentPath)) return null;
  return `/${normalized}`;
}
