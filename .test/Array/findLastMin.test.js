import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/findLastMin.js").then((findLastMin) => describe("Array/findIndexMin", () => {
  it("not empty", () => {
    strictEqual(findLastMin(() => 1)([1]), 1);
  });

  it("empty", () => {
    strictEqual(findLastMin(() => 1)([]), void 0);
  });

  it("not empty correct call", () => {
    var id = x => x;
    strictEqual(findLastMin(id)([1, 2, 3]), 1);
    strictEqual(findLastMin(id)([1, 3, 2]), 1);
    strictEqual(findLastMin(id)([3, 1, 2]), 1);
    strictEqual(findLastMin(id)([3, 2, 1]), 1);
  });

  it("must be last", () => {
    strictEqual(findLastMin(Number)([true, 1, "1", "2"]), "1");
    strictEqual(findLastMin(Number)([true, "1", 1, "2"]), 1);
    strictEqual(findLastMin(Number)(["1", 1, true, "2"]), true);
  });
}));
