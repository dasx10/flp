import { it, describe } from "node:test";
import assert from "node:assert";

import _ge from "./index.js";

describe("greater than or equal (_ge)", () => {
  for (var index = 0; index < 10; index++) {
    it("test by integer " + index, () => {
      assert.strictEqual(_ge(index, index), true);
      assert.strictEqual(_ge(index, index + 1), false);
      assert.strictEqual(_ge(index, index - 1), true);
    });


    for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
      var currentFloat = index + toFloat;
      it("test by float " + currentFloat, () => {
        assert.strictEqual(_ge(currentFloat, currentFloat), true);
        assert.strictEqual(_ge(currentFloat, currentFloat + 1), false);
        assert.strictEqual(_ge(currentFloat, currentFloat - 1), true);
      });
    }
  }
});
