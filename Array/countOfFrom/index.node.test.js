import { it, describe } from "node:test";
import assert from 'node:assert';

import countOfFrom from "./index.js";

const countOf = countOfFrom(0);

describe("array countOf", () => {
  it("curry", () => {
    assert.strictEqual(typeof countOf, "function");
    assert.strictEqual(countOf.length, 1);
    assert.strictEqual(typeof countOf(1), "function");
    assert.strictEqual(countOf(1).length, 1);
  });

  it("current value", () => {
    assert.strictEqual(countOf(0)([1, 2, 3]), 0);
    assert.strictEqual(countOf(1)([1, 2, 3]), 1);
    assert.strictEqual(countOf(2)([1, 2, 3]), 1);
    assert.strictEqual(countOf(3)([1, 2, 3]), 1);
    assert.strictEqual(countOf(4)([1, 2, 3]), 0);
    assert.strictEqual(countOf(1)([1, 1, 3]), 2);
    assert.strictEqual(countOf(2)([1, 1, 3]), 0);
    assert.strictEqual(countOf(3)([1, 1, 3]), 1);
    assert.strictEqual(countOf(1)([1, 1, 1]), 3);
    assert.strictEqual(countOf(2)([1, 1, 1]), 0);
    assert.strictEqual(countOf(3)([1, 1, 1]), 0);
  });

  it("count from", () => {
    for (let index = 1; index < 100; index++) {
      const countOf = countOfFrom(index);
      assert.strictEqual(countOf(0)([1, 2, 3]), 0 + index);
      assert.strictEqual(countOf(1)([1, 2, 3]), 1 + index);
      assert.strictEqual(countOf(2)([1, 2, 3]), 1 + index);
      assert.strictEqual(countOf(3)([1, 2, 3]), 1 + index);
      assert.strictEqual(countOf(4)([1, 2, 3]), 0 + index);
      assert.strictEqual(countOf(1)([1, 1, 3]), 2 + index);
      assert.strictEqual(countOf(2)([1, 1, 3]), 0 + index);
      assert.strictEqual(countOf(3)([1, 1, 3]), 1 + index);
      assert.strictEqual(countOf(1)([1, 1, 1]), 3 + index);
      assert.strictEqual(countOf(2)([1, 1, 1]), 0 + index);
      assert.strictEqual(countOf(3)([1, 1, 1]), 0 + index);
    }
  });
});
