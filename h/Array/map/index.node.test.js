import { it, describe } from "node:test";
import assert from "node:assert";

import map from "./index.js";

var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var identity = (value) => value;
var mul10 = (value) => value * 10;

describe("map", () => {
  it("must be function", () => {
    assert.strictEqual(typeof map, "function");
    assert.strictEqual(map.length, 2);
  });

  it("must return function", () => {
    assert.strictEqual(typeof map(identity), "function");
  });

  it("must be return current value", () => {
    assert.deepStrictEqual(map(testArray, identity), testArray);
    assert.deepStrictEqual(map(testArray, mul10), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

  });

  it ("must be return current value part", () => {
    var copy = map(identity);
    var muls10 = map(mul10);

    assert.deepStrictEqual(copy(testArray), testArray);
    assert.deepStrictEqual(muls10(testArray), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  });
});
