import { describe, it } from "node:test";
import assert from 'node:assert';

import filterByPropIsMemo from "./index.js";

const filterByX = filterByPropIsMemo("x");
const depth = 200;
const testArray = Array.from({ length: 65534 }, (_, i) => ({ x: ~~(Math.random() * depth), y: i }));

describe("array filterByPropMemo", () => {
  it("curry", () => {
    assert.strictEqual(typeof filterByX, "function");
    assert.strictEqual(filterByX.length, 1);
    assert.strictEqual(typeof filterByX(1), "function");
    assert.strictEqual(filterByX(1).length, 1);
  });

  it("current value", () => {
    for (let index = 0; index < depth; index++) {
      const result = filterByX(index)(testArray);
      const mustBe = testArray.filter((user) => user.x === index);
      assert.deepStrictEqual(result, mustBe);
    }
  });

  it("must be returned memo", () => {
    for (let index = 0; index < depth; index++) {
      const result = filterByX(index)(testArray);
      const result2 = filterByX(index)(testArray);
      assert.strictEqual(result, result2);
    }
  });

  it ("must be original array if empty", () => {
    const emptyArray = []
    const result9 = filterByX(1)(emptyArray);
    const result10 = filterByX(1)(emptyArray);
    assert.strictEqual(result9, result10);
    assert.strictEqual(result9, emptyArray);
  });
});
