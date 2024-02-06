import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

import le from "./index.js";

describe("less than or equal (_le)", () => {
  __functionLength2(le);

  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(le(index, index), true);
      assert.strictEqual(le(index, index + 1), true);
      assert.strictEqual(le(index, index - 1), false);
    }
  });

  it("test by float ", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(le(currentFloat, currentFloat), true);
        assert.strictEqual(le(currentFloat, currentFloat + 1), true);
        assert.strictEqual(le(currentFloat, currentFloat - 1), false);
      }
    }
  });
});
