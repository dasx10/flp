import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/countBy.js").then((countBy) => describe("Array/countBy", () => {
  it("not empty", () => {
    strictEqual(countBy(Math.abs)([1, 2, 3, -1]), { 1: 2, 2: 1, 3: 1});
  });

  it("empty", () => {
    strictEqual(countBy(Math.abs)([]), {});
  });
}));
