import { it, describe } from "node:test";
import assert           from "node:assert";

import fillAll from "./index.js";

describe("array fillAll", () => {
  it("curry", () => {
    assert.strictEqual(typeof fillAll([1, 2, 3]), "function");
    assert.strictEqual(fillAll([1, 2, 3]).length, 1);
  });

  it("current value", () => {
    assert.deepStrictEqual(fillAll(0)([1, 2, 3]), [0, 0, 0]);
  });

  it("no side effects", () => {
    const array     = [1, 2, 3];
    const newArray  = fillAll(0)(array);
    const nextArray = fillAll(1)(array);
    assert.notDeepStrictEqual(array, newArray);
    assert.notDeepStrictEqual(array, nextArray);
    assert.notDeepStrictEqual(newArray, nextArray);
    assert.deepStrictEqual(array, [1, 2, 3]);
    assert.deepStrictEqual(newArray, [0, 0, 0]);
    assert.deepStrictEqual(nextArray, [1, 1, 1]);
  });
});
