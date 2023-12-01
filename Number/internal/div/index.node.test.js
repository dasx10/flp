import { it, describe } from "node:test";
import assert from "node:assert";

import div from "./index.js";

describe("div", () => {
  it("function", () => {
    assert.strictEqual(typeof div, "function");
  });

  it("current length", () => {
    assert.strictEqual(div.length, 2);
  });

  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      for (var next = -10; next < 10; next++) {
        assert.strictEqual(div(index, next), index / next);
        assert.strictEqual(div(next, index), next / index);
      }
    }
  });
});
