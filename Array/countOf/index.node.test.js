import { describe, it } from "node:test";
import assert           from "node:assert";

import countOf from "./index.js";

var gt0      = (value) => value > 0;
var count    = countOf(0);
var countGt0 = count(gt0);

describe("array countOf", () => {
  it("curry", () => {
    assert.strictEqual(typeof count, "function");
    assert.strictEqual(count.length, 1);
    assert.strictEqual(typeof countGt0, "function");
    assert.strictEqual(countGt0.length, 1);
  });

  it("current value", () => {
    for (var index = 1; index < 10; index++) {
      var gt0Array = Array.from({ length: index } ,(_, index) => index + 1);
      assert.strictEqual(countGt0(gt0Array), index);
      for (var next = -10; next !== 0; next++) {
        var lt0Array = Array.from({ length: ~index}, (_, index) => ~index);
        assert.strictEqual(countGt0(lt0Array), 0);

        var hasGt0Array = gt0Array.concat(lt0Array);
        assert.strictEqual(countGt0(hasGt0Array), index);
      }
    }
  });
});
