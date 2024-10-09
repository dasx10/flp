import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/findIndexMin.js").then((findIndexMin) => describe("Array/findIndexMin", () => {
  it("not empty", () => {
    strictEqual(findIndexMin(() => 1)([1]), 0);
  });

  it("empty", () => {
    strictEqual(findIndexMin(() => 1)([]), -1);
  });

  it("not empty correct call", () => {
    var id = x => x;
    strictEqual(findIndexMin(id)([1, 2, 3]), 0);
    strictEqual(findIndexMin(id)([1, 3, 2]), 0);
    strictEqual(findIndexMin(id)([3, 1, 2]), 1);
    strictEqual(findIndexMin(id)([3, 2, 1]), 2);
  });
}));
