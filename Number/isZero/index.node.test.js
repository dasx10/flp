import { it, describe } from "node:test";
import assert from "node:assert";

import isZero from "./index.js";

describe("isZero", () => {
  it("function", () => {
    assert.strictEqual(typeof isZero, "function");
  });

  it("current length", () => {
    assert.strictEqual(isZero.length, 1);
  });

  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      assert.strictEqual(isZero(index), index === 0);
    }
  });
});
