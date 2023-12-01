import { it, describe } from "node:test";
import assert from "node:assert";

import _lt from "./index.js";

describe("less than (_lt)", () => {
  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(_lt(index, index), false);
      assert.strictEqual(_lt(index, index + 1), true);
      assert.strictEqual(_lt(index, index - 1), false);
    }
  });

  it("test by float", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(_lt(currentFloat, currentFloat), false);
        assert.strictEqual(_lt(currentFloat, currentFloat + 1), true);
        assert.strictEqual(_lt(currentFloat, currentFloat - 1), false);
      }
    }
  });
});
