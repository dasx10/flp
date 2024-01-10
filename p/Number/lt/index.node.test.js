import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

import lt from "./index.js";

describe("less than (lt)", () => {
  __functionLength2(lt);

  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(lt(index, index), false);
      assert.strictEqual(lt(index, index + 1), true);
      assert.strictEqual(lt(index, index - 1), false);
    }
  });

  it("test by float", () => {
    for (var index = 0; index < 10; index++) {
      for (var toFloat = 0.1; toFloat < .9; toFloat += 0.1) {
        var currentFloat = index + toFloat;
        assert.strictEqual(lt(currentFloat, currentFloat), false);
        assert.strictEqual(lt(currentFloat, currentFloat + 1), true);
        assert.strictEqual(lt(currentFloat, currentFloat - 1), false);
      }
    }
  });
});
