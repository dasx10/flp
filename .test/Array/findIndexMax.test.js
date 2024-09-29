import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/findIndexMax.js").then((findIndexMax) => describe("Array/findIndexMax", () => {
  it("not empty", () => {
    strictEqual(findIndexMax(() => 1)([1]), 0);
  });

  it("empty", () => {
    strictEqual(findIndexMax(() => 1)([]), -1);
  });

  it("not empty correct call", () => {
    var id = x => x;
    strictEqual(findIndexMax(id)([1, 2, 3]), 2);
    strictEqual(findIndexMax(id)([1, 3, 2]), 1);
    strictEqual(findIndexMax(id)([3, 1, 2]), 0);
  });
}));
