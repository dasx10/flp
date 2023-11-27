import test, { describe } from "node:test";
import assert from 'node:assert';

import filter from "./index.js";

/** @type {[1, 2, 3, 4, 5, 6, 7, 8, 9]} */
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("array filter", () => {
  test("current value", () => {
    assert.deepStrictEqual(filter(x => x > 5)(testArray), [6, 7, 8, 9]);
  });
});
