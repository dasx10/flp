import test, { describe } from "node:test";
import assert from 'node:assert';

import concat from "./index.js";

describe("array concat", () => {
  test("curry", () => {
    assert.strictEqual(typeof concat([1, 2, 3]), "function");
    assert.strictEqual(concat([1, 2, 3]).length, 1);
  });

  test("current value", () => {
    assert.deepStrictEqual(concat([4, 5, 6])([1, 2, 3]), [1, 2, 3, 4, 5, 6]);
  });

});
