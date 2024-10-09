import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/findLast.js").then((findLast) => describe("Array/findIndexMin", () => {
  it("not empty", () => {
    strictEqual(findLast(() => true)([1]), 1);
  });

  it("empty", () => {
    strictEqual(findLast(() => true)([]), void 0);
  });

  it("not empty last value", () => {
    strictEqual(findLast(Boolean)([1, 2, 3]), 3);
    strictEqual(findLast(Boolean)([1, 3, 2]), 2);
    strictEqual(findLast(Boolean)([3, 1, 2]), 2);
    strictEqual(findLast(Boolean)([3, 2, 1]), 1);
  });

  it("not empty correct value", () => {
    var falsy = [0, false, null, undefined, NaN];
    strictEqual(findLast(Boolean)([1, 2, 3, ...falsy]), 3);
    strictEqual(findLast(Boolean)([1, 3, 2, ...falsy]), 2);
    strictEqual(findLast(Boolean)([3, 1, 2, ...falsy]), 2);
    strictEqual(findLast(Boolean)([3, 2, 1, ...falsy]), 1);
  });
}));
