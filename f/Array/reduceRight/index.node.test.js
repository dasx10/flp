import { it, describe } from "node:test";
import assert           from "node:assert";

import reduce from "./index.js";

const add = (next) => (value) => (value + next);

describe("array reduce", () => {
  it("curry", () => {
    assert.strictEqual(typeof reduce, "function");
    assert.strictEqual(reduce.length, 1);
    assert.strictEqual(typeof reduce(add), "function");
    assert.strictEqual(reduce(add).length, 1);
    assert.strictEqual(typeof reduce(add)(0), "function");
    assert.strictEqual(reduce(add)(0).length, 1);
  });

  it("current value from empty", () => {
    const sumFrom = reduce(add);
    for (let index = 0; index < 65535; index++) {
      assert.strictEqual(sumFrom(index)([]), index);
    }
  });

  it("current value", () => {
    const sumFrom = reduce(add);
    const depth = 20000;
    for (let index = 0; index < depth; index++) {
      const testArray = Array.from({ length: depth - index }, () => 1);
      assert.strictEqual(sumFrom(index)(testArray), depth);
    }
  });
});
