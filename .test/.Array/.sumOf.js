import { it, describe } from "node:test";
import assert from "node:assert";
import sumOf from "../../Array/sumOf.js";
describe("sumOf", () => {
  it("current value", () => {
    assert.strictEqual(sumOf(0)([1, 2, 3, 4]), 10);
  });
});
