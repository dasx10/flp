import { it, describe } from "node:test";
import assert           from "node:assert";

import eq from "./index.js";

describe("array eq", () => {
  it("curry", () => {
    assert.strictEqual(typeof eq([1, 2, 3]), "function");
    assert.strictEqual(eq([1, 2, 3]).length, 1);
  });

  it("empty", () => {
    assert.strictEqual(eq([])([]), true);
  });

  it("current value", () => {
    assert.strictEqual(eq([4, 5, 6])([1, 2, 3]), false);
    assert.strictEqual(eq([1, 2, 3])([1, 2, 3]), true);
    assert.strictEqual(eq([1, 2, 3])([1, 2, 3, 4]), false);
    assert.strictEqual(eq([1, 2, 3, 4])([1, 2, 3]), false);
    assert.strictEqual(eq([1, 2, 3, 4])([1, 2, 3, 4]), true);
    assert.strictEqual(eq([1, 2, 3, 5, 4])([1, 2, 3, 4, 5]), false);
  });

  it("current value object", () => {
    assert.strictEqual(eq([{}])([{}]), true);
    assert.strictEqual(eq([{a:1}])([{a:1}]), true);
    assert.strictEqual(eq([{a:1}])([{a:2}]), false);
    assert.strictEqual(eq([{a:1}])([{a:1}, {a:2}]), false);
    assert.strictEqual(eq([{a:1}, {a:2}])([{a:1}, {a:2}]), true);
    assert.strictEqual(eq([{a:1}, {a:2}])([{a:1}, {a:3}]), false);
    assert.strictEqual(eq([{a:3}, {a:2}, {a:1}])([{a:1}, {a:2}, {a:3}]), false);
  });
});
