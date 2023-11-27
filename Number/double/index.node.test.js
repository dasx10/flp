import { it, describe } from "node:test";
import assert from "node:assert";

import double from "./index.js";

describe("double", () => {
  it("function", () => {
    assert.strictEqual(typeof double, "function");
  });

  it("current length", () => {
    assert.strictEqual(double.length, 1);
  });

  for (var index = -10; index < 10; index++) {
    it(`current value ${index}`, () => {
      assert.strictEqual(double(index), index * 2);
    });
  }
});
