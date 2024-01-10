import test, { describe } from "node:test";
import assert from 'node:assert';

import notEmpty from "./index.js";

/** @type {[1, 2, 3, 4, 5, 6, 7, 8, 9]} */
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("array not empty", () => {
  test("true value", () => {
    assert.strictEqual(notEmpty(testArray), true);
  });
  test("false value", () => {
    assert.strictEqual(notEmpty([]), false);
  });
});
