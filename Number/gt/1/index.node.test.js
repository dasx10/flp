import { it, describe } from "node:test";
import assert from "node:assert";

import gt1 from "./index.js";

describe("gt1", () => {
  it("current value 1 and 0 -> false", () => {
    assert.strictEqual(gt1(0), false);
    assert.strictEqual(gt1(1), false);
  });

  it("current value > 1", () => {
    for (var index = 2; index < 100; index++) {
      assert.strictEqual(gt1(index), true);
    }
  });
});
