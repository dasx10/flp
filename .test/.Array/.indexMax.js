import { it, describe } from "node:test";
import { strictEqual } from "node:assert";
import indexMax from "../../Array/indexMax.js";

describe("indexMin", () => {
  it("current value", () => {
    strictEqual(indexMax([]), -1);
    strictEqual(indexMax([1]), 0);
    strictEqual(indexMax([1, 2]), 1);
    strictEqual(indexMax([1, 2, 3]), 2);
    strictEqual(indexMax([2, 3]), 1);
    strictEqual(indexMax([3]), 0);
    strictEqual(indexMax([3, 2]), 0);
    strictEqual(indexMax([1, 2, 3, 11, 4]), 3);
    strictEqual(indexMax([1, 2, 3, 5, 4, 10]), 5);
  });
});
