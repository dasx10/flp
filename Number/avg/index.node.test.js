import { it, describe } from "node:test";
import assert from "node:assert";

import avg from "./index.js";

describe("avg", () => {
  it("current value", () => {
    for (var index = -10; index < 10; index++) {
      for (var next = -10; next < 10; next++) {
        assert.strictEqual(avg(index)(next), (next + index) / 2);
      }
    }
  });
});
