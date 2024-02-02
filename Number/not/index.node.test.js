import { it, describe } from "node:test";
import assert from "node:assert";

import not from "./index.js";

describe("not", () => {
  it("function", () => {
    assert.strictEqual(typeof not, "function");
  });

  it("current length", () => {
    assert.strictEqual(not.length, 1);
  });

  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      assert.strictEqual(not(index), !index);
    }
  });
});
