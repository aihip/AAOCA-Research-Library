import { handleVisit } from "../../db/visit-api";

interface PagesContext {
  request: Request;
  env: {
    DB: D1Database;
  };
}

export function onRequest(context: PagesContext): Promise<Response> {
  return handleVisit(context.request, context.env);
}
