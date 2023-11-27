import test, { describe } from "node:test";
import assert from 'node:assert';

import concat from "./index.js";

describe("array concat", () => {
  test("current value", () => {
    assert.deepStrictEqual(concat([4, 5, 6])([1, 2, 3]), [1, 2, 3, 4, 5, 6]);
  });
});
