import { it, describe } from "node:test";
import assert from "node:assert";

import le from "./index.js";

describe("less than or equal (le)", () => {
  it("test by integer eq", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(le(index)(index), true);
    }
  });

  it("test by integer gt", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(le(index)(index + 1), false);
    }
  });

  it("test by integer lt", () => {
    for (var index = 0; index < 10; index++) {
      assert.strictEqual(le(index)(index - 1), true);
    }
  });
});
