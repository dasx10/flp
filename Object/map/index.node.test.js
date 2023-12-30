import { it, describe } from "node:test";
import assert           from "node:assert";

import map from "../map/index.js";

describe("map", () => {
  it("curry", () => {
    assert.strictEqual(typeof map(String), "function");
    assert.strictEqual(map(String).length, 1);
  });

  it("current value", () => {
    const testN = { a: 1, b: 2 };
    const newTest = map(String)(testN);
    assert.deepStrictEqual(Object.keys(newTest), Object.keys(testN));
    assert.deepStrictEqual(Object.values(newTest), Object.values(testN).map(String));
  });
});
