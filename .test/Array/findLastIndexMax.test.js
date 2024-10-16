import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("./Array/findLastIndexMax.js").then((findLastIndexMax) => describe("Array/findLastIndexMax", () => {
  it("not empty", () => {
    strictEqual(findLastIndexMax(() => 1)([1]), 0);
  });

  it("empty", () => {
    strictEqual(findLastIndexMax(() => 1)([]), -1);
  });

  it("not empty correct call", () => {
    strictEqual(findLastIndexMax(Number)([1, 2, 3]), 2);
    strictEqual(findLastIndexMax(Number)([1, 3, 2]), 1);
    strictEqual(findLastIndexMax(Number)([3, 1, 2]), 0);
    strictEqual(findLastIndexMax(Number)([3, 2, 1]), 0);
  });
}));
