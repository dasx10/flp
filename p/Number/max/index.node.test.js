import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

import max from "./index.js";

describe("max", () => {
  __functionLength2(max);

  it("return value", () => {
    for (let index = -100; index < 100; index++) {
      assert.strictEqual(max(NaN,       index), index);
      assert.strictEqual(max(-Infinity, index), index);
      assert.strictEqual(max(Infinity,  index), Infinity);
    }
  });

  it("return any when eq", () => {
    for (let index = -100; index < 100; index++) {
      assert.strictEqual(max(index, index), index);
    }
  });

  it("return first", () => {
    for (let index = -100; index < 100; index++) {
      for (let next = index + 1; next < 100; next++) {
        assert.strictEqual(max(next, index), next);
      }
    }
  });

  it("return second", () => {
    for (let index = -100; index < 100; index++) {
      for (let next = index + 1; next < 100; next++) {
        assert.strictEqual(max(index, next), next);
      }
    }
  });
});
