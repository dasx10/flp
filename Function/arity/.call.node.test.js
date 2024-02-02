import { describe, it } from "node:test";
import assert from "node:assert";

import arity from "../arity/index.js";

describe("arity", () => {
  it("must be function", () => {
    assert.strictEqual(typeof arity, "function");
    assert.strictEqual(arity.length, 2);
  });

  it("must return function", () => {
    assert.strictEqual(typeof arity(() => {}, 1), "function");
    assert.strictEqual(typeof arity(() => {}, 2), "function");
    assert.strictEqual(typeof arity(() => {}, 3), "function");
  });

  it("must return function with current length", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(arity(() => {}, index).length, index);
      assert.strictEqual(arity((value) => value, index).length, index);
      assert.strictEqual(arity((...values) => values, index).length, index);
      assert.strictEqual(arity((value, ...values) => value || values, index).length, index);
    }
  });
});
