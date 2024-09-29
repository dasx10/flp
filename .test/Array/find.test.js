import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/find.js").then((find) => describe("Array/find", () => {
  it("not empty", () => {
    strictEqual(find(() => true)([1, 2, 3]), 1);
  });

  it("empty", () => {
    strictEqual(find(() => true)([]), void 0);
  });

  it("not empty correct call", () => {
    strictEqual(find(x => x === 1)([1, 2, 3]), 1);
    strictEqual(find(x => x === 2)([1, 2, 3]), 2);
    strictEqual(find(x => x === 3)([1, 2, 3]), 3);
    strictEqual(find(x => x === 4)([1, 2, 3]), void 0);
    strictEqual(find(x => x > -1)([1, 2, 3]), 1);
    strictEqual(find(x => x > 0)([1, 2, 3]), 1);
    strictEqual(find(x => x > 1)([1, 2, 3]), 2);
    strictEqual(find(x => x > 2)([1, 2, 3]), 3);
    strictEqual(find(x => x > 3)([1, 2, 3]), void 0);
    strictEqual(find(x => x < 1)([1, 2, 3]), void 0);
    strictEqual(find(x => x < 2)([1, 2, 3]), 1);
    strictEqual(find(x => x < 3)([1, 2, 3]), 1);
    strictEqual(find(x => x < 4)([1, 2, 3]), 1);
  });
}));
