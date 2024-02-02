import { it, describe } from "node:test";
import assert from "node:assert";

import is from "./index.js";

describe("is", () => {
  it("function", () => {
    assert.strictEqual(typeof is, "function");
  });

  it("curry", () => {
    assert.strictEqual(typeof is(1), "function");
  });

  it("current length", () => {
    assert.strictEqual(is.length, 1);
  });

  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      for (var next = -10; next < 10; next++) {
        assert.strictEqual(is(index)(next), index === next);
      }
    }
  });
});
