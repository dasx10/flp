import { it, describe } from "node:test";
import assert from "node:assert";

import _gt from "./index.js";

describe("less than or equal (_gt)", () => {
  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(_gt(index, index), false);
      assert.strictEqual(_gt(index, index + 1), false);
      assert.strictEqual(_gt(index, index - 1), true);
    }
  });

  it("test by float ", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(_gt(currentFloat, currentFloat), false);
        assert.strictEqual(_gt(currentFloat, currentFloat + 1), false);
        assert.strictEqual(_gt(currentFloat, currentFloat - 1), true);
      }
    }
  });
});
