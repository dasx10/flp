import { it, describe } from "node:test";
import assert from "node:assert";
import sum from "../../Array/sum.js";

describe("sumOf", () => {
  it("current value", () => {
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
  });
});
