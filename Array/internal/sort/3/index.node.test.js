
import test, { describe } from "node:test";
import assert from 'node:assert';

import _sort3 from "./index.js";

describe("array _sort3", () => {
  describe("current start value", () => {
    test("start 1", () => {
      assert.deepStrictEqual(_sort3([1, 3, 2], a => b => a - b, 3), [1, 3, 2].sort((a, b) => a - b));
      assert.deepStrictEqual(_sort3([1, 2, 3], a => b => a - b, 3), [1, 2, 3].sort((a, b) => a - b));
    });

    test("start 2", () => {
      assert.deepStrictEqual(_sort3([2, 1, 3], a => b => a - b, 3), [2, 1, 3].sort((a, b) => a - b));
      assert.deepStrictEqual(_sort3([2, 3, 1], a => b => a - b, 3), [2, 3, 1].sort((a, b) => a - b));
    });

    test("start 3", () => {
      assert.deepStrictEqual(_sort3([3, 2, 1], a => b => a - b, 3), [3, 2, 1].sort((a, b) => a - b));
      assert.deepStrictEqual(_sort3([3, 1, 2], a => b => a - b, 3), [3, 1, 2].sort((a, b) => a - b));
    });
  });
});
