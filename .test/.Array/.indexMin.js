import { it, describe } from "node:test";
import { strictEqual } from "node:assert";
import indexMin from "../../Array/indexMin.js";

describe("indexMin", () => {
  it("current value", () => {
    strictEqual(indexMin([]), -1);
    strictEqual(indexMin([1]), 0);
    strictEqual(indexMin([1, 2]), 0);
    strictEqual(indexMin([1, 2, 3]), 0);
    strictEqual(indexMin([2, 3]), 0);
    strictEqual(indexMin([3]), 0);
    strictEqual(indexMin([3, 2]), 1);
    strictEqual(indexMin([1, 2, 3, 0, 4]), 3);
    strictEqual(indexMin([1, 2, 3, 0, 4, -1]), 5);
  });
});
