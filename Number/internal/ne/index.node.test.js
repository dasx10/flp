import { it, describe } from "node:test";
import assert from "node:assert";

import _ne from "./index.js";

describe("less than or equal (_ne)", () => {
  for (var index = 0; index < 10; index++) {
    it("test by integer " + index, () => {
      assert.strictEqual(_ne(index, index), false);
      assert.strictEqual(_ne(index, index + 1), true);
      assert.strictEqual(_ne(index, index - 1), true);
    });


    for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
      var currentFloat = index + toFloat;
      it("test by float " + currentFloat, () => {
        assert.strictEqual(_ne(currentFloat, currentFloat), false);
        assert.strictEqual(_ne(currentFloat, currentFloat + 1), true);
        assert.strictEqual(_ne(currentFloat, currentFloat - 1), true);
      });
    }
  }
});
