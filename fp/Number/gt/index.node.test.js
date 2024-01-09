import { it, describe } from "node:test";
import assert from "node:assert";

import gt from "./index.js";

describe("greater than (gt)", () => {
  it("test by integer eq", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(gt(index)(index), false);
    }
  });

  it("test by integer gt", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(gt(index)(index + 1), true);
    }
  });

  it("test by integer lt", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(gt(index)(index - 1), false);
    }
  });
});
