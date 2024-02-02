import { it, describe } from "node:test";
import assert from "node:assert";

import max from "./index.js";

describe("max", () => {
  it("current value", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(max(index)(-1), index);
    }
  });

  it("return value check NaN", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(max(index)(NaN), index);
    }
  });

  it("next value", () => {
    for (var index = 0; index < 10; index++) {
      var minIndex = max(index);
      for (var next = index + 1; next < 11; next++) {
        assert.strictEqual(minIndex(next), next);
        assert.strictEqual(max(next)(index), next);
      }
    }
  });
});
