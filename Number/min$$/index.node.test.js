import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

import min from "./index.js";

describe("min", () => {
  __functionLength2(min);

  it("return value", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(min(NaN, index), index);
      assert.strictEqual(min(Infinity, index), index);
      assert.strictEqual(min(-Infinity, index), -Infinity);
    }
  });

  it("return value when eq", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(min(index, index), index);
    }
  });

  it("return first", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = index + 1; next < 10; next++) {
        assert.strictEqual(min(index, next), index);
      }
    }
  });

  it("return second", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = index + 1; next < 10; next++) {
        assert.strictEqual(min(next, index), index);
      }
    }
  });
});
