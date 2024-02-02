import { it, describe } from "node:test";
import assert from "node:assert";

import neZero from "./index.js";

describe("ne0", () => {
  it("function", () => {
    assert.strictEqual(typeof neZero, "function");
  });

  it("current length", () => {
    assert.strictEqual(neZero.length, 1);
  });

  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      assert.strictEqual(neZero(index), index !== 0);
    }
  });
});
