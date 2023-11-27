import { it, describe } from "node:test";
import assert from "node:assert";

import _eq from "./index.js";

describe("less than or equal (_eq)", () => {
  for (var index = 0; index < 10; index++) {
    it("test by integer " + index, () => {
      assert.strictEqual(_eq(index, index), true);
      assert.strictEqual(_eq(index, index + 1), false);
      assert.strictEqual(_eq(index, index - 1), false);
    });


    for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
      var currentFloat = index + toFloat;
      it("test by float " + currentFloat, () => {
        assert.strictEqual(_eq(currentFloat, currentFloat), true);
        assert.strictEqual(_eq(currentFloat, currentFloat + 1), false);
        assert.strictEqual(_eq(currentFloat, currentFloat - 1), false);
      });
    }
  }
});
