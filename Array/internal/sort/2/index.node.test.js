
import test, { describe } from "node:test";
import assert from 'node:assert';

import _sort2 from "./index.js";

describe("array _sort3", () => {
  describe("current start value", () => {
    test("start 1", () => {
      assert.deepStrictEqual(_sort2([1, 2], a => b => a - b), [1, 2].sort((a, b) => a - b));
      assert.deepStrictEqual(_sort2([1, 2], a => b => b - a), [1, 2].sort((a, b) => b - a));
    });

    test("start 2", () => {
      assert.deepStrictEqual(_sort2([2, 1], a => b => a - b), [2, 1].sort((a, b) => a - b));
      assert.deepStrictEqual(_sort2([2, 1], a => b => b - a), [2, 1].sort((a, b) => b - a));
    });
  });
});

