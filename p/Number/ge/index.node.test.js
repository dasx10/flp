import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

import ge from "./index.js";

describe("greater than or equal (ge)", () => {
  __functionLength2(ge);

  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(ge(index, index), true);
      assert.strictEqual(ge(index, index + 1), false);
      assert.strictEqual(ge(index, index - 1), true);
    }
  });

  it("test by float ", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(ge(currentFloat, currentFloat), true);
        assert.strictEqual(ge(currentFloat, currentFloat + 1), false);
        assert.strictEqual(ge(currentFloat, currentFloat - 1), true);
      }
    }
  });
});
