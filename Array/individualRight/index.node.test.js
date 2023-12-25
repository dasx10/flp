import test, { describe } from "node:test";
import assert from 'node:assert';

import individualRight from "./index.js";

describe("array not empty", () => {
  test("current value", () => {
    assert.deepStrictEqual(individualRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), [2, 3, 4, 5, 6, 7, 8, 9, 1]);
  });
});
