import { it, describe } from "node:test";
import assert from "node:assert";

import one from "./index.js";

describe("one", () => {
  it ("current length", () => {
    assert.strictEqual(one.length, 0);
  });

  it("current from empty", () => {
    assert.strictEqual(one(), 1);
  });

  it("current from NaN", () => {
    assert.strictEqual(one(NaN), 1);
  });

  it("current from Infinity", () => {
    assert.strictEqual(one(Infinity), 1);
  });

  it("current from -Infinity", () => {
    assert.strictEqual(one(-Infinity), 1);
  });

  it("current from value", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(one(index), 1);
    }
  });

  it("current from values", () => {
    assert.strictEqual(one(...Array.from({ length: 255 }, (_, index) => index)), 1);
  });
});
