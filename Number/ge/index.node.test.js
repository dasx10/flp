import test, { describe } from "node:test";
import assert from 'node:assert';

import ge from "./index.js";

describe("greater than or equal (ge)", () => {
  test("greater values", () => {
    assert.strictEqual(ge(5)(10), true);
    assert.strictEqual(ge(5)(5), true);
    assert.strictEqual(ge(5)(4), false);
  });

  test("floating point numbers", () => {
    assert.strictEqual(ge(0.1)(0.2), true);
    assert.strictEqual(ge(0.1)(0.1), true);
    assert.strictEqual(ge(0.1)(0.05), false);
  });

  test("negative numbers", () => {
    assert.strictEqual(ge(-5)(-10), true);
    assert.strictEqual(ge(-5)(-5), true);
    assert.strictEqual(ge(-5)(-4), false);
  });

  test("mixed positive and negative", () => {
    assert.strictEqual(ge(-5)(5), true);
    assert.strictEqual(ge(5)(-5), true);
    assert.strictEqual(ge(-5)(-5), true);
  });
});
