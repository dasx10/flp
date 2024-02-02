import { it, describe } from "node:test";
import assert from 'node:assert';

import at from "./index.js";

describe("array at", () => {

  it("curry", () => {
    assert.strictEqual(typeof at(1), "function");
    assert.strictEqual(at(1).length, 1);
  });

  it("current value", () => {
    assert.deepStrictEqual(at(5)([1, 2, 3, 4, 5, 6, 7, 8, 9]), 5);
    assert.deepStrictEqual(at(-1)([1, 2, 3, 4, 5, 6, 7, 8, 9]), 9);
    assert.deepStrictEqual(at(10)([1, 2, 3, 4, 5, 6, 7, 8, 9]), undefined);
    assert.deepStrictEqual(at(-10)([1, 2, 3, 4, 5, 6, 7, 8, 9]), undefined);
  });

});
