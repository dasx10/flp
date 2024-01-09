import { it, describe } from "node:test";
import assert from "node:assert";

import between from "./index.js";

describe("between", () => {
  it("current value false", () => {
    for (var index = 1; index < 100; index++) {
      assert.strictEqual(between(index, 0, index), false);
      assert.strictEqual(between(0, 0, index), false);
    }
  });

  it("current value true", () => {
    for (var index = 1; index < 100; index++) {
      for (var next = index + 1; next < index; next++) {
        assert.strictEqual(between(index, 0, next), true);
      }
    }
  });
});
