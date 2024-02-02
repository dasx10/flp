import { it, describe } from "node:test";
import assert from 'node:assert';

import countBy from "./index.js";

describe("array countBy", () => {
  it("curry", () => {
    assert.strictEqual(typeof countBy(String), "function");
    assert.strictEqual(countBy(Boolean).length, 1);
  });

  it("current value", () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const identity = (value) => value;
    const valuesResult = countBy(identity)(values);
    assert.deepStrictEqual(Object.values(valuesResult), [1, 1, 1, 1, 1, 1, 1, 1, 1]);
    assert.deepStrictEqual(Object.keys(valuesResult), ["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    assert.deepEqual(countBy(Math.abs)([-1, 1, 0, 2]), { "1": 2, "0": 1, "2": 1 });
  });
});
