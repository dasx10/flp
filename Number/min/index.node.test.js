import { it, describe } from "node:test";
import assert from "node:assert";

import min from "./index.js";

describe("min", () => {
  for (var index = 0; index < 10; index++) {
    it("current value", () => {
      var minNaN = min(NaN);
      assert.strictEqual(min(index)(NaN), index);
      assert.strictEqual(minNaN(index), index);
    });

    var minIndex = min(index);
    it("next value", () => {
      for (var next = index + 1; next < 11; next++) {
          assert.strictEqual(minIndex(next), index);
          assert.strictEqual(min(next)(index), index);
      }
    });
  }
});
