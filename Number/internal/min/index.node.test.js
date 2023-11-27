import { it, describe } from "node:test";
import assert from "node:assert";

import min from "./index.js";

describe("min", () => {
  for (var index = 0; index < 10; index++) {
    it("return value", () => {
      assert.strictEqual(min(NaN, index), index);
      assert.strictEqual(min(Infinity, index), index);
      assert.strictEqual(min(-Infinity, index), -Infinity);
    });

    it("return any (" + index + ") :" + index + " and " + index, () => {
      assert.strictEqual(min(index, index), index);
    });

    for (var next = index + 1; next < 10; next++) {
      it("return first (" + index + ") :" + index + " and " + next, () => {
        assert.strictEqual(min(index, next), index);
      });

      it("return second (" + index + ") : " + next + " and " + index, () => {
        assert.strictEqual(min(next, index), index);
      });
    }
  }
});
