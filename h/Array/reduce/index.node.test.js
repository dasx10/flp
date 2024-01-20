import { it, describe } from "node:test";
import assert from "node:assert";

import reduce from "./index.js";

const _add = (x, y) => x + y;
const add = (y) => (x) => _add(x, y);

describe("reduce", () => {
  it("must be function", () => {
    assert.strictEqual(typeof reduce, "function");
    assert.strictEqual(reduce.length, 3);
  });

  it("must return function", () => {
    assert.strictEqual(typeof reduce(() => {}), "function");
    assert.strictEqual(typeof reduce(0, () => {}), "function");
    assert.strictEqual(typeof reduce(() => {})(0), "function");
  });

  it("must return function with current length", () => {
    assert.strictEqual(reduce(() => {}).length, 2);
    assert.strictEqual(reduce(0, () => {}).length, 1);
    assert.strictEqual(reduce(() => {})(0).length, 1);
  });

  it("must return current value", () => {
    assert.strictEqual(reduce([1, 2, 3, 4], 0, _add), 10);
  });

  it("must return current value use curry add", () => {
    assert.strictEqual(reduce([1, 2, 3, 4], 0, add), 10);
  });

  it("must return current value use partial and add regular", () => {
    const _sumFrom = reduce(_add);
    assert.strictEqual(_sumFrom([1, 2, 3, 4], 0), 10);
  });

  it("must return current value use partial and add curry", () => {
    const sumFrom = reduce(add);
    assert.strictEqual(sumFrom([1, 2, 3, 4], 0), 10);
  });

  it("must return current value use 2 curry and add curry", () => {
    const sum = reduce(0, add);
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
  });

  it("must return current value use 2 curry and add regular", () => {
    const _sum = reduce(0, _add);
    assert.strictEqual(_sum([1, 2, 3, 4]), 10);
  });

  it("must return current value use 1 curry and add curry", () => {
    const sumFrom = reduce(add);
    const sum = sumFrom(0);
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
  });

  it("must return current value use 1 curry and add regular", () => {
    const _sumFrom = reduce(_add);
    const _sum = _sumFrom(0);
    assert.strictEqual(_sum([1, 2, 3, 4]), 10);
  });
});
