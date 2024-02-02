import { describe, it } from "node:test";
import assert           from "node:assert";

import countRight from "./index.js";

var gt0           = (value) => value > 0;
var countRightGt0 = countRight(gt0);

describe("array countFrom", () => {
  it("curry", () => {
    assert.strictEqual(typeof countRightGt0, "function");
    assert.strictEqual(countRightGt0.length, 1);
  });

  it("current value", () => {
    for (var index = 1; index < 10; index++) {
      var gt0Array = Array.from({ length: index } ,(_, index) => index + 1);
      assert.strictEqual(countRightGt0(gt0Array), index);
      for (var next = -10; next !== 0; next++) {
        var lt0Array = Array.from({ length: ~index}, (_, index) => ~index);
        assert.strictEqual(countRightGt0(lt0Array), 0);

        var hasGt0Array = gt0Array.concat(lt0Array);
        assert.strictEqual(countRightGt0(hasGt0Array), index);
      }
    }
  });
});
