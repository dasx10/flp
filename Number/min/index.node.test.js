import { it, describe } from "node:test";
import assert from "node:assert";

import min from "./index.js";

describe("min", () => {
  it("current value", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(min(index)(NaN), index);
    }
  });


  it("next value", () => {
    for (var index = 0; index < 10; index++) {
      var minIndex = min(index);
      for (var next = index + 1; next < 11; next++) {
        assert.strictEqual(minIndex(next), index);
        assert.strictEqual(min(next)(index), index);
      }
    }
  });
});
