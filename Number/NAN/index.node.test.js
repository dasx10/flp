import { it, describe } from "node:test";
import assert from "node:assert";

import NAN from "./index.js";

describe("NAN", () => {
  it("function", () => {
    assert.strictEqual(typeof NAN, "function");
  });

  it("current length", () => {
    assert.strictEqual(NAN.length >= 0, true);
  });

  it(`current value`, () => {
    assert.strictEqual(NAN(), NaN);
    for (var index = -10; index < 10; index++) {
      assert.strictEqual(NAN(index), NaN);
    }
  });
});
