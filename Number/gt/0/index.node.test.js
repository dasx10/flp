import { it, describe } from "node:test";
import assert from "node:assert";

import gt0 from "./index.js";

describe("gt0", () => {
  it("current value 0", () => {
    assert.strictEqual(gt0(0), false);
  });

  it("current value > 0", () => {
    for (var index = 1; index < 100; index++) {
      assert.strictEqual(gt0(index), true);
    }
  });
});
