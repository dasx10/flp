import { describe, it } from "node:test";
import assert from 'node:assert';

import mul from "./index.js";

describe("mul", () => {
  var mul0 = mul(0);
  var mul1 = mul(1);
  for (var index = 1; index < 10; index++) {
    it("current value " + index, () => {
      assert.strictEqual(mul0(index), 0);
      assert.strictEqual(mul1(index), index);
      assert.strictEqual(mul(index)(index), index ** 2);
    });
  }
});
