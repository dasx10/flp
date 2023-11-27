import test, { describe } from "node:test";
import assert from 'node:assert';

import lengthGt from "./index.js";

/** @type {[1, 2, 3, 4, 5, 6, 7, 8, 9]} */
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("array not empty", () => {
  test("current value true if gt", () => {
    for (var size = testArray.length - 1; size > 0; size--) {
      assert.strictEqual(lengthGt(size)(testArray), true);
    }
  });

  test("current value false if lt", () => {
    for (var size = testArray.length + 1; size < ((testArray.length + 1) * 2); size++) {
      assert.strictEqual(lengthGt(size)(testArray), false);
    }
  });

  test("current value false if eq", () => {
    assert.strictEqual(
      lengthGt(testArray.length)(testArray),
      false
    );
  });
});
