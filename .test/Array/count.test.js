import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("./Array/count.js").then((count) => describe("Array/count", () => {
  it("not empty", () => {
    strictEqual(count(Number)([1, 2, 3]), 3);
  });

  it("empty", () => {
    strictEqual(count(Number)([]), 0);
  });

  it("not empty correct call", () => {
    strictEqual(count(x => x > 0)([1, 2, 3]), 3);
    strictEqual(count(x => x > 1)([1, 2, 3]), 2);
    strictEqual(count(x => x > 2)([1, 2, 3]), 1);
    strictEqual(count(x => x > 3)([1, 2, 3]), 0);
    strictEqual(count(x => x < 3)([1, 2, 3]), 2);
    strictEqual(count(x => x < 2)([1, 2, 3]), 1);
    strictEqual(count(x => x < 1)([1, 2, 3]), 0);
    strictEqual(count(x => x === 1)([1, 2, 3]), 1);
    strictEqual(count(x => x === 2)([1, 2, 3]), 1);
    strictEqual(count(x => x === 3)([1, 2, 3]), 1);
    strictEqual(count(x => x === 4)([1, 2, 3]), 0);
    strictEqual(count(x => x === 0)([1, 2, 3]), 0);
  });
}));
