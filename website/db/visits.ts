import { CREATE_PAGE_VIEWS_TABLE } from "./schema";

export async function incrementPageView(db: D1Database, path: string): Promise<number> {
  await db.prepare(CREATE_PAGE_VIEWS_TABLE).run();

  const result = await db.prepare(`
    INSERT INTO page_views (path, views, updated_at)
    VALUES (?1, 1, CURRENT_TIMESTAMP)
    ON CONFLICT(path) DO UPDATE SET
      views = page_views.views + 1,
      updated_at = CURRENT_TIMESTAMP
    RETURNING views
  `).bind(path).first<{ views: number }>();

  if (!result) throw new Error("Page view increment returned no result");
  return result.views;
}
