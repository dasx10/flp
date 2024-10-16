import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/findLastMax.js").then((findLastMax) => describe("Array/findLastMax", () => {
  it("not empty", () => {
    strictEqual(findLastMax(() => 1)([1]), 1);
  });

  it("empty", () => {
    strictEqual(findLastMax(() => 1)([]), void 0);
  });

  it("not empty correct call", () => {
    var id = x => x;
    strictEqual(findLastMax(id)([1, 2, 3]), 1);
    strictEqual(findLastMax(id)([1, 3, 2]), 1);
    strictEqual(findLastMax(id)([3, 1, 2]), 1);
    strictEqual(findLastMax(id)([3, 2, 1]), 1);
  });

  it("must be last", () => {
    strictEqual(findLastMax(Number)([true, 1, "1", "2"]), "1");
    strictEqual(findLastMax(Number)([true, "1", 1, "2"]), 1);
    strictEqual(findLastMax(Number)(["1", 1, true, "2"]), true);
  });
}));
