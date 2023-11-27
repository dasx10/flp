import test, { describe } from "node:test";
import assert from 'node:assert';

import uniq from "./index.js";

describe("array not empty", () => {
  test("current value", () => {
    assert.deepStrictEqual(uniq([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
