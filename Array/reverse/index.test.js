import test, { describe } from "node:test";
import assert from 'node:assert';

import reverse from "./index.js";

/** @type {[1, 2, 3, 4, 5, 6, 7, 8, 9]} */
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var reversed = reverse(testArray);

describe("array reverse", () => {
  test("current value", () => {
    assert.deepStrictEqual(reverse(testArray), [9, 8, 7, 6, 5, 4, 3, 2, 1])
  });

  test("return current any time", () => {
    assert.deepStrictEqual(reverse(testArray), reversed)
    assert.deepStrictEqual(reversed, reverse(testArray));
  });

  test("is equal repeat", () => {
    assert.deepStrictEqual(reverse(reverse(testArray)), testArray);
  });

  test("not a mutable", () => {
    reverse(testArray);
    assert.deepStrictEqual(testArray, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("current length", () => {
    assert.strictEqual(reverse.length, 1);
  });

  test("current type", () => {
    assert.strictEqual(typeof reverse, "function");
  });

  test("empty", () => {
    assert.deepStrictEqual(reverse([]), []);
  });

  test("empty return this", () => {
    var test = [];
    assert.strictEqual(reverse(test), test);
  });

  test("once return this", () => {
    var test = [1];
    assert.strictEqual(reverse(test), test);
  });
});
