import { it, describe } from "node:test";
import assert from "node:assert";

import _gt from "./index.js";

describe("less than or equal (_gt)", () => {
  for (var index = 0; index < 10; index++) {
    it("test by integer " + index, () => {
      assert.strictEqual(_gt(index, index), false);
      assert.strictEqual(_gt(index, index + 1), false);
      assert.strictEqual(_gt(index, index - 1), true);
    });


    for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
      var currentFloat = index + toFloat;
      it("test by float " + currentFloat, () => {
        assert.strictEqual(_gt(currentFloat, currentFloat), false);
        assert.strictEqual(_gt(currentFloat, currentFloat + 1), false);
        assert.strictEqual(_gt(currentFloat, currentFloat - 1), true);
      });
    }
  }
});
