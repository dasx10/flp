import { it, describe } from "node:test";
import assert from 'node:assert';

import filterDimension from "./index.js";

describe("array filterDimension", () => {
  it("curry", () => {
    assert.strictEqual(typeof filterDimension(Boolean), "function");
    assert.strictEqual(filterDimension(Boolean).length, 1);
  });

  it("current value", () => {
    const numbers = [0, 1, 2, 3, 4, 5];
    const result = filterDimension(Boolean)(numbers);
    assert.deepStrictEqual(result, [1, 2, 3, 4, 5]);
  });

  it("must be original array", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filterDimension(Boolean)(numbers);
    assert.strictEqual(result, numbers);
  });
});
