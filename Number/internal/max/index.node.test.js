import { it, describe } from "node:test";
import assert from "node:assert";

import max from "./index.js";

describe("max", () => {

  for (var index = 0; index < 10; index++) {
    it("return value", () => {
      assert.strictEqual(max(NaN, index), index);
      assert.strictEqual(max(-Infinity, index), index);
      assert.strictEqual(max(Infinity, index), Infinity);
    });

    it("return any (" + index + ") :" + index + " and " + index, () => {
      assert.strictEqual(max(index, index), index);
    });

    for (var next = index + 1; next < 10; next++) {

      it("return first (" + next + ") :" + index + " and " + next, () => {
        assert.strictEqual(max(next, index), next);
      });

      it("return second (" + next + ") : " + next + " and " + index, () => {
        assert.strictEqual(max(index, next), next);
      });
    }
  }
});
