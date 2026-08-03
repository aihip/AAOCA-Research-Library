/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";
import { incrementPageView } from "../db/visits";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
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

async function handleVisit(request: Request, env: Env): Promise<Response> {
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

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    if (url.pathname === "/api/visits") {
      return handleVisit(request, env);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
