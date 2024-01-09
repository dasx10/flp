import test, { describe } from "node:test";
import assert from 'node:assert';

import filter from "./index.js";

/** @type {[1, 2, 3, 4, 5, 6, 7, 8, 9]} */
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("array filter", () => {
  test("curry", () => {
    assert.strictEqual(typeof filter(x => x > 5), "function");
    assert.strictEqual(filter(x => x > 5).length, 1);
  });

  test("current value", () => {
    assert.deepStrictEqual(filter(x => x > 5)(testArray), [6, 7, 8, 9]);
  });

  test("no side effect", () => {
    const filtered = filter(x => x > 5)(testArray);
    assert.deepStrictEqual(testArray, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const filtered2 = filter(x => x > 6)(filtered);
    assert.deepStrictEqual(filtered2, [7, 8, 9]);
  });
});
