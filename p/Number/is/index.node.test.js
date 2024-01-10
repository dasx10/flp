import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

import is from "./index.js";

describe("less than or equal (is)", () => {
  __functionLength2(is);

  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(is(index, index), true);
      assert.strictEqual(is(index, index + 1), false);
      assert.strictEqual(is(index, index - 1), false);
    }
  });

  it("test by float ", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
       var currentFloat = index + toFloat;
       assert.strictEqual(is(currentFloat, currentFloat), true);
       assert.strictEqual(is(currentFloat, currentFloat + 1), false);
       assert.strictEqual(is(currentFloat, currentFloat - 1), false);
      }
    }
  });
});
