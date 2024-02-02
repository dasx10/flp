import test, { describe } from "node:test";
import assert from 'node:assert';

import individual from "./index.js";

describe("array not empty", () => {
  test("current value", () => {
    assert.deepStrictEqual(individual([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
