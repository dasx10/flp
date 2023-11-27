import test, { describe } from "node:test";
import assert from 'node:assert';

import isString from "./index.js";

describe("isString", () => {
  test("current value", () => {
    assert.strictEqual(isString(""), true);
    assert.strictEqual(isString("string"), true);
    assert.strictEqual(isString("false"), true);
    assert.strictEqual(isString("undefined"), true);
    assert.strictEqual(isString("value"), true);
  });

  test("current value from constructor", () => {
    assert.strictEqual(isString(new String), true);
  });

  test("invalid value", () => {
    assert.strictEqual(isString(1), false);
  });

  test("current length", () => {
    assert.strictEqual(isString.length, 1);
  });
});
