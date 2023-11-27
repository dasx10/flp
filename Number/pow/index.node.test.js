import { it, describe } from "node:test";
import assert from "node:assert";

import pow from "./index.js";

describe("pow", () => {
  it("current value", () => {
    var powNan = pow(NaN);
    for(var index = 0; index < 10; index++) {
      assert.strictEqual(powNan(index), NaN);
      assert.strictEqual(pow(index)(index), index ** index);
      for (var next = index + 1; next < index; next++) {
        assert.strictEqual(pow(index)(next), next ** index);
        assert.strictEqual(pow(next)(index), index ** next);
      }
    }
  });
});
