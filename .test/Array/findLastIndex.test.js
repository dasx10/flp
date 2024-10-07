import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/findLastIndex.js").then((findLastIndex) => describe("Array/findLastIndex", () => {
  it("not empty", () => {
    var array = [1, 2, 3];
    strictEqual(findLastIndex(() => true)(array), array.length - 1);
  });

  it("empty", () => {
    strictEqual(findLastIndex(() => true)([]), -1);
  });

  it("not empty correct call", () => {
    strictEqual(findLastIndex(x => x === 1)([1, 2, 3]), 0);
    strictEqual(findLastIndex(x => x === 2)([1, 2, 3]), 1);
    strictEqual(findLastIndex(x => x === 3)([1, 2, 3]), 2);
    strictEqual(findLastIndex(x => x > 0)([1, 2, 3]), 2);
    strictEqual(findLastIndex(x => x > 1)([1, 2, 3]), 2);
    strictEqual(findLastIndex(x => x > 2)([1, 2, 3]), 2);
    strictEqual(findLastIndex(x => x < 4)([1, 2, 3]), 2);
    strictEqual(findLastIndex(x => x < 3)([1, 2, 3]), 1);
    strictEqual(findLastIndex(x => x < 2)([1, 2, 3]), 0);
  });

  it("missing element", () => {
    strictEqual(findLastIndex(x => x === 4)([1, 2, 3]), -1);
    strictEqual(findLastIndex(x => x > 3)([1, 2, 3]), -1);
    strictEqual(findLastIndex(x => x < 1)([1, 2, 3]), -1);
  });

  it("must be a last value", () => {
    strictEqual(findLastIndex(x => x > -1)([1, 2, 3]), 2);
    strictEqual(findLastIndex(x => x > 0)([1, 2, 3]), 2);
    strictEqual(findLastIndex(x => x > 1)([1, 2, 3]), 2);
    strictEqual(findLastIndex(x => x > 2)([1, 2, 3]), 2);
  });
}));
