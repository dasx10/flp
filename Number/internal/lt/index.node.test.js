import { it, describe } from "node:test";
import assert from "node:assert";

import _lt from "./index.js";

describe("less than (_lt)", () => {
  for (var index = 0; index < 10; index++) {
    it("test by integer " + index, () => {
      assert.strictEqual(_lt(index, index), false);
      assert.strictEqual(_lt(index, index + 1), true);
      assert.strictEqual(_lt(index, index - 1), false);
    });


    for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
      var currentFloat = index + toFloat;
      it("test by float " + currentFloat, () => {
        assert.strictEqual(_lt(currentFloat, currentFloat), false);
        assert.strictEqual(_lt(currentFloat, currentFloat + 1), true);
        assert.strictEqual(_lt(currentFloat, currentFloat - 1), false);
      });
    }
  }
});
