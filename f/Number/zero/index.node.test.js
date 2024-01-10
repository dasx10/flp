import { it, describe } from "node:test";
import assert from "node:assert";

import zero from "./index.js";

describe("one", () => {
  it ("current length", () => {
    assert.strictEqual(zero.length, 0);
  });

  it("current from empty", () => {
    assert.strictEqual(zero(), 0);
  });

  it("current from NaN", () => {
    assert.strictEqual(zero(NaN), 0);
  });

  it("current from Infinity", () => {
    assert.strictEqual(zero(Infinity), 0);
  });

  it("current from -Infinity", () => {
    assert.strictEqual(zero(-Infinity), 0);
  });

  it("current from value", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(zero(index), 0);
    }
  });

  it("current from values", () => {
    assert.strictEqual(zero(...Array.from({ length: 255 }, (_, index) => index)), 0);
  });
});
