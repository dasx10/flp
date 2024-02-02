import { it, describe } from "node:test";
import assert           from "node:assert";

import lift from "./index.js";

var toCallback = (value) => (callback) => callback(value);

describe("lift function", () => {
  it("current value", () => {
    assert.strictEqual(lift(toCallback("test")), "test");
    assert.strictEqual(lift(toCallback(1)), 1);
    assert.strictEqual(lift(toCallback(2)), 2);

    var toTest = toCallback("test");
    assert.strictEqual(lift(toTest), "test");
    assert.strictEqual(lift(toTest), "test");
    assert.strictEqual(lift(toTest) === lift(toTest), true);
  });
});
