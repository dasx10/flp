
import test, { describe } from "node:test";
import assert from 'node:assert';

import _sort from "./index.js";

const testArray = [1, 3, 2, 4, 6, 5, 0, 9, 8, 7];

describe("array _sort", () => {
  test("current sort", () => {
    assert.deepStrictEqual(_sort([...testArray], b => a => a - b), [...testArray].sort((a, b) => a - b));
    assert.deepStrictEqual(_sort([...testArray], b => a => b - a), [...testArray].sort((a, b) => b - a));
  });

  test("identity array", () => {
    const a = [1, 2, 3, 4, 5];
    assert.strictEqual(_sort(a, b => a => a - b), a);
  });
});
