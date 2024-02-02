import test, { describe } from "node:test";
import assert from 'node:assert';

import noneRight from "./index.js";

var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("array noneRight", () => {
  test("current value true", () => {
    assert.strictEqual(noneRight(x => x === 10)(testArray), true);
  });

  test("current value false", () => {
    assert.strictEqual(noneRight(x => x === 9)(testArray), false);
  });

  test("current type", () => {
    assert.strictEqual(typeof noneRight, "function");
    assert.strictEqual(typeof noneRight(Boolean), "function");
  });

  test("current length", () => {
    assert.strictEqual(noneRight.length, 1);
    assert.strictEqual(noneRight(Boolean).length, 1);
  });

  test("current type result", () => {
    var identity = value => value;
    var noneIdentity = noneRight(identity);
    assert.strictEqual(noneIdentity([1, 2, 3]), false);
    assert.strictEqual(noneIdentity(["a", "b"]), false);
    assert.strictEqual(noneIdentity([0]), true);
    assert.strictEqual(noneIdentity([""]), true);
    assert.strictEqual(noneIdentity([false]), true);
    assert.strictEqual(noneIdentity([null]), true);
    assert.strictEqual(noneIdentity([NaN]), true);
    assert.strictEqual(noneIdentity([undefined]), true);
  });
});
