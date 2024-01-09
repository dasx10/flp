import test, { describe } from "node:test";
import assert from 'node:assert';

import filterMemo from "./index.js";

var createTestArray = () => Array.from({ length: 65534 }, (_, i) => i + 1);

/** @type {[1, 2, 3, 4, 5, 6, 7, 8, 9]} */
var testArray  = createTestArray();
var gt5 = (x) => x > 5;

describe("array filter memo", () => {
  test("curry", () => {
    assert.strictEqual(typeof filterMemo(gt5), "function");
    assert.strictEqual(filterMemo(gt5).length, 1);
  });

  test("current value", () => {
    assert.deepStrictEqual(filterMemo(gt5)(testArray), testArray.filter(gt5));
  });

  test("no side effect", () => {
    const filtered = filterMemo(gt5)(testArray);
    assert.deepStrictEqual(filtered, testArray.filter(gt5));
    var gt6 = (x) => x > 6;
    const filtered2 = filterMemo(gt6)(filtered);
    assert.deepStrictEqual(filtered2, filtered.filter(gt6));
  });

  test("returned memoize result", () => {
    const filtered1 = filterMemo(gt5)(testArray);
    const filtered2 = filterMemo(gt5)(testArray);
    assert.strictEqual(filtered1, filtered2);
  });
});
