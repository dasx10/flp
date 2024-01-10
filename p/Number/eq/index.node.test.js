import { it, describe } from "node:test";
import assert from "node:assert";

import eq from "./index.js";

describe("less than or equal (_eq)", () => {
  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(eq(index, index), true);
      assert.strictEqual(eq(index, index + 1), false);
      assert.strictEqual(eq(index, index - 1), false);
    }
  });

  it("test by float ", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(eq(currentFloat, currentFloat), true);
        assert.strictEqual(eq(currentFloat, currentFloat + 1), false);
        assert.strictEqual(eq(currentFloat, currentFloat - 1), false);
      }
    }
  });
});
