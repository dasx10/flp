import { it, describe } from "node:test";
import assert           from "node:assert";

import eqUnSort from "./index.js";

describe("array eq", () => {
  it("curry", () => {
    assert.strictEqual(typeof eqUnSort([1, 2, 3]), "function");
    assert.strictEqual(eqUnSort([1, 2, 3]).length, 1);
  });

  it("empty", () => {
    assert.strictEqual(eqUnSort([])([]), true);
  });

  it("current value", () => {
    assert.strictEqual(eqUnSort([4, 5, 6])([1, 2, 3]), false);
    assert.strictEqual(eqUnSort([1, 2, 3])([1, 2, 3]), true);
    assert.strictEqual(eqUnSort([1, 2, 3])([1, 2, 3, 4]), false);
    assert.strictEqual(eqUnSort([1, 2, 3, 4])([1, 2, 3]), false);
    assert.strictEqual(eqUnSort([1, 2, 3, 4])([1, 2, 3, 4]), true);
    assert.strictEqual(eqUnSort([1, 2, 3, 5, 4])([1, 2, 3, 4, 5]), true);
    assert.strictEqual(eqUnSort([1, 2, 3, 4, 5])([1, 2, 3, 4, 6]), false);
  });

  it("try duplicate", () => {
    assert.strictEqual(eqUnSort([1, 2, 2])([1, 2, 3]), false);
    assert.strictEqual(eqUnSort([1, 2, 3])([1, 2, 2]), false);
    assert.strictEqual(eqUnSort([1, 2, 2, 3])([1, 2, 3, 3]), false);
  });

  it("current value object", () => {
    assert.strictEqual(eqUnSort([{}])([{}]), true);
    assert.strictEqual(eqUnSort([{a:1}])([{a:1}]), true);
    assert.strictEqual(eqUnSort([{a:1}])([{a:2}]), false);
    assert.strictEqual(eqUnSort([{a:1}])([{a:1}, {a:2}]), false);
    assert.strictEqual(eqUnSort([{a:1}, {a:2}])([{a:1}, {a:2}]), true);
    assert.strictEqual(eqUnSort([{a:1}, {a:2}])([{a:1}, {a:3}]), false);
    assert.strictEqual(eqUnSort([{a:3}, {a:2}, {a:1}])([{a:1}, {a:2}, {a:3}]), true);
  });
});
