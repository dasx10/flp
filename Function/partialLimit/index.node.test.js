import { describe, it } from "node:test";
import assert from "node:assert";

import partialLimit from "../partialLimit/index.js";

const concat = (...values) => values.join("");

describe("partialLimit", () => {
  it("must be function", () => {
    assert.strictEqual(typeof partialLimit, "function");
    assert.strictEqual(partialLimit.length, 2);
  });

  it("must return function", () => {
    assert.strictEqual(typeof partialLimit(() => {}, 1), "function");
    assert.strictEqual(typeof partialLimit(() => {}, 2), "function");
    assert.strictEqual(typeof partialLimit(() => {}, 3), "function");
  });

  it ("must return function with limit", () => {
    assert.strictEqual(typeof partialLimit(() => {}, 1, 1), "undefined");
    assert.strictEqual(typeof partialLimit(() => {}, 2, 1, 2), "undefined");
    assert.strictEqual(typeof partialLimit(() => {}, 3, 1, 2, 3), "undefined");
  });

  it("must return function with limit and current length 1", () => {
    assert.strictEqual(partialLimit(() => {}, 1).length, 1);
  });

  it("must return function with limit and current length 2", () => {
    assert.strictEqual(partialLimit(() => {}, 2).length, 2);
    assert.strictEqual(partialLimit(() => {}, 2)(1).length, 1);
  });

  it("must return function with limit and current length 3 and mix", () => {
    assert.strictEqual(partialLimit(() => {}, 3).length, 3);
    assert.strictEqual(partialLimit(() => {}, 3)(1).length, 2);
    assert.strictEqual(partialLimit(() => {}, 3)(1, 2).length, 1);
  });

  it("must be current steps", () => {
    const concat3 = partialLimit(concat, 3);
    assert.strictEqual(concat3("1", "2", "3"), "123");
    assert.strictEqual(concat3("2", "3")("1"), "123");
    assert.strictEqual(concat3("3")("1", "2"), "123");
    assert.strictEqual(concat3("3")("2")("1"), "123");
  });
});
