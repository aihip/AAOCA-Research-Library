import assert from "node:assert/strict";
import test from "node:test";
import { normalizePagePath } from "../db/page-path.ts";

const pagePaths = [
  "/",
  "/about",
  "/updates",
  "/experiences",
  "/experiences/aaorca-family-consultations",
  "/analysis",
  "/analysis/aaorca-conservative-surveillance",
  "/topics/surgery",
  "/papers/2026-d29299373d7f",
  "/en",
  "/en/about",
  "/en/updates",
  "/en/experiences",
  "/en/experiences/aaorca-family-consultations",
  "/en/analysis",
  "/en/analysis/aaorca-conservative-surveillance",
  "/en/topics/surgery",
  "/en/papers/2026-d29299373d7f",
];

test("accepts and normalizes every public page family", () => {
  for (const path of pagePaths) {
    assert.equal(normalizePagePath(path), path);
    assert.equal(
      normalizePagePath(path === "/" ? path : `${path}/`),
      path,
    );
  }
});

test("rejects API, asset, malformed, and unknown paths", () => {
  const rejectedPaths = [
    "/api/visits",
    "/robots.txt",
    "/analysis/not_allowed",
    "/en/unknown",
    "//about",
  ];

  for (const path of rejectedPaths) {
    assert.equal(normalizePagePath(path), null);
  }
});
