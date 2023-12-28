import { it, describe } from "node:test";
import assert           from "node:assert";

import eq from "./index.js";

describe("array eq", () => {
  it("curry", () => {
    assert.strictEqual(typeof eq([1, 2, 3]), "function");
    assert.strictEqual(eq([1, 2, 3]).length, 1);
  });

  it("current value", () => {
    assert.deepStrictEqual(eq([4, 5, 6])([1, 2, 3]), false);
    assert.deepStrictEqual(eq([1, 2, 3])([1, 2, 3]), true);
    assert.deepStrictEqual(eq([1, 2, 3])([1, 2, 3, 4]), false);
    assert.deepStrictEqual(eq([1, 2, 3, 4])([1, 2, 3]), false);
    assert.deepStrictEqual(eq([1, 2, 3, 4])([1, 2, 3, 4]), true);
    assert.deepStrictEqual(eq([1, 2, 3, 5, 4])([1, 2, 3, 4, 5]), false);
  });
});
