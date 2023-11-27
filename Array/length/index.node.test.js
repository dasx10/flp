import test, { describe } from "node:test";
import assert from 'node:assert';

import length from "./index.js";

/** @type {[1, 2, 3, 4, 5, 6, 7, 8, 9]} */
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("array not empty", () => {
  test("current value", () => {
    assert.strictEqual(length(testArray), 9);
  });

  test("resize value", () => {
    for (let size = 0; size < 9; size++) {
      assert.strictEqual(length(Array(size)), size);
    }
  });
});
