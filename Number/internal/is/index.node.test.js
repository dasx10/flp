import { it, describe } from "node:test";
import assert from "node:assert";

import _is from "./index.js";

describe("less than or equal (_is)", () => {
  for (var index = 0; index < 10; index++) {
    it("test by integer " + index, () => {
      assert.strictEqual(_is(index, index), true);
      assert.strictEqual(_is(index, index + 1), false);
      assert.strictEqual(_is(index, index - 1), false);
    });


    for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
      var currentFloat = index + toFloat;
      it("test by float " + currentFloat, () => {
        assert.strictEqual(_is(currentFloat, currentFloat), true);
        assert.strictEqual(_is(currentFloat, currentFloat + 1), false);
        assert.strictEqual(_is(currentFloat, currentFloat - 1), false);
      });
    }
  }
});
