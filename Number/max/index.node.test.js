import { it, describe } from "node:test";
import assert from "node:assert";

import max from "./index.js";

describe("max", () => {
  for (var index = 0; index < 10; index++) {
    it("current value", () => {
      var minNaN = max(NaN);
      assert.strictEqual(max(index)(NaN), index);
      assert.strictEqual(minNaN(index), index);
    });

    var minIndex = max(index);
    it("next value", () => {
      for (var next = index + 1; next < 11; next++) {
          assert.strictEqual(minIndex(next), next);
          assert.strictEqual(max(next)(index), next);
      }
    });
  }
});
