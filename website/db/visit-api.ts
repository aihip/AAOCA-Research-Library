import { incrementPageView } from "./visits";

interface VisitEnv {
  DB: D1Database;
}

const contentPathPattern = /^(?:about|topics\/[a-z0-9-]+|papers\/[a-z0-9-]+)$/;

function isPagePath(path: string): boolean {
  const normalized = path.replace(/^\//, "").replace(/\/$/, "");
  if (normalized === "" || normalized === "en") return true;
  if (normalized.startsWith("en/")) {
    return contentPathPattern.test(normalized.slice(3));
  }
  return contentPathPattern.test(normalized);
}

function json(body: unknown, status = 200): Response {
  return Response.json(body, {
    status,
    headers: {
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });
}

export async function handleVisit(request: Request, env: VisitEnv): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { allow: "POST" },
    });
  }

  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") {
    return json({ error: "Cross-site requests are not allowed" }, 403);
  }

  let path: unknown;
  try {
    ({ path } = (await request.json()) as { path?: unknown });
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  if (
    typeof path !== "string"
    || path.length > 160
    || !path.startsWith("/")
    || !isPagePath(path)
  ) {
    return json({ error: "Invalid page path" }, 400);
  }

  const normalizedPath = path.length > 1 ? path.replace(/\/$/, "") : path;
  const count = await incrementPageView(env.DB, normalizedPath);
  return json({ count });
}
