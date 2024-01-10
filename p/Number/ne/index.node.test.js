import { it, describe } from "node:test";
import assert from "node:assert";

import ne from "./index.js";

describe("less than or equal (_ne)", () => {
  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(ne(index, index), false);
      assert.strictEqual(ne(index, index + 1), true);
      assert.strictEqual(ne(index, index - 1), true);
    }
  });

  it("test by float", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(ne(currentFloat, currentFloat), false);
        assert.strictEqual(ne(currentFloat, currentFloat + 1), true);
        assert.strictEqual(ne(currentFloat, currentFloat - 1), true);
      }
    }
  });
});
