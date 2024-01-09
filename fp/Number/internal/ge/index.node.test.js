import { it, describe } from "node:test";
import assert from "node:assert";

import _ge from "./index.js";

describe("greater than or equal (_ge)", () => {
  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(_ge(index, index), true);
      assert.strictEqual(_ge(index, index + 1), false);
      assert.strictEqual(_ge(index, index - 1), true);
    }
  });

  it("test by float ", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(_ge(currentFloat, currentFloat), true);
        assert.strictEqual(_ge(currentFloat, currentFloat + 1), false);
        assert.strictEqual(_ge(currentFloat, currentFloat - 1), true);
      }
    }
  });
});
