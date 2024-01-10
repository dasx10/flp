import { it, describe } from "node:test";
import assert from "node:assert";

import max from "./index.js";

describe("max", () => {
  it("return value", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(max(NaN, index), index);
      assert.strictEqual(max(-Infinity, index), index);
      assert.strictEqual(max(Infinity, index), Infinity);
    }
  });

  it("return any when eq", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(max(index, index), index);
    }
  });

  it("return first", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = index + 1; next < 10; next++) {
        assert.strictEqual(max(next, index), next);
      }
    }
  });

  it("return second", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = index + 1; next < 10; next++) {
        assert.strictEqual(max(index, next), next);
      }
    }
  });
});
