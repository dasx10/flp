import { it, describe } from "node:test";
import assert from "node:assert";

import sub from "./index.js";

describe("subtract (_sub)", () => {
  it("function", () => {
    assert.strictEqual(typeof sub, "function");
  });

  it("current length", () => {
    assert.strictEqual(sub.length, 2);
  });

  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      for (var next = -10; next < 10; next++) {
        assert.strictEqual(sub(index, next), index - next);
        assert.strictEqual(sub(next, index), next - index);
      }
    }
  });
});
