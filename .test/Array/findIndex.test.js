import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/findIndex.js").then((findIndex) => describe("Array/findIndex", () => {
  it("not empty", () => {
    strictEqual(findIndex(() => true)([1]), 0);
  });

  it("empty", () => {
    strictEqual(findIndex(() => true)([]), -1);
  });

  it("not empty correct call", () => {
    strictEqual(findIndex(x => x === 1)([1, 2, 3]), 0);
    strictEqual(findIndex(x => x === 2)([1, 2, 3]), 1);
    strictEqual(findIndex(x => x === 3)([1, 2, 3]), 2);
    strictEqual(findIndex(x => x > 0)([1, 2, 3]), 0);
    strictEqual(findIndex(x => x > 1)([1, 2, 3]), 1);
    strictEqual(findIndex(x => x > 2)([1, 2, 3]), 2);
  });

  it("missing element", () => {
    strictEqual(findIndex(x => x === 4)([1, 2, 3]), -1);
    strictEqual(findIndex(x => x > 3)([1, 2, 3]), -1);
    strictEqual(findIndex(x => x < 1)([1, 2, 3]), -1);
  });

  it("must be a first value", () => {
    strictEqual(findIndex(x => x > -1)([1, 2, 3]), 0);
    strictEqual(findIndex(x => x < 2)([1, 2, 3]), 0);
    strictEqual(findIndex(x => x < 3)([1, 2, 3]), 0);
    strictEqual(findIndex(x => x < 4)([1, 2, 3]), 0);
  });
}));
