import { it, describe } from "node:test";
import assert from "node:assert";

import clamp from "./index.js";

describe("clamp", () => {
  it("function", () => {
    assert.strictEqual(typeof clamp, "function");
  });

  it("curry", () => {
    assert.strictEqual(typeof clamp(0), "function");
  });

  it("current length", () => {
    assert.strictEqual(clamp.length, 1);
    assert.strictEqual(clamp(0).length, 1);
  });

  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      for (var next = -10; next < 10; next++) {
        for (var value = -10; value < 10; value++) {
          var maxVal = Math.max(index, next);
          var minVal = Math.min(index, next);
          assert.strictEqual(clamp(next)(index)(value), Math.min(maxVal, Math.max(minVal, value)));
          assert.strictEqual(clamp(index)(next)(value), Math.min(maxVal, Math.max(minVal, value)));
        }
      }
    }
  });
});
