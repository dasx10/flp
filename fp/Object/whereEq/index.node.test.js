import { it, describe } from "node:test";
import assert           from "node:assert";

import whereEq from "./index.js";

describe("whereEq", () => {
  it("curry", () => {
    assert.strictEqual(typeof whereEq({ age: 40 }), "function");
    assert.strictEqual(whereEq({ age: 40 }).length, 1);
  });

  it("current value", () => {
    assert.strictEqual(whereEq({ age: 40 })({ age: 40 }), true);
    assert.strictEqual(whereEq({ age: 40 })({ age: 50 }), false);
    assert.strictEqual(whereEq({ age: 40 })({ age: 40, tags: ["a", "b", "c"] }), true);
    assert.strictEqual(whereEq({ age: 40, tags: ["a", "b", "c"] })({ age: 40, tags: ["a", "b", "c"] }), true);
    assert.strictEqual(whereEq({ age: 40, tags: ["a", "b", "c"] })({ age: 40, tags: ["a", "b", "d"] }), false);
  });
});
