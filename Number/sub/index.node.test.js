import { describe, it } from "node:test";
import assert from 'node:assert';

import sub from "./index.js";

describe("subtract", () => {
  it("current value", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = 0; next < 10; next++) {
          assert.strictEqual(sub(index)(next), next - index);
          assert.strictEqual(sub(next)(index), index - next);
      }
    }
  });

  it("current length", () => {
    assert.strictEqual(sub(2).length, 1);
  });
});
