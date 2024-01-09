import { it, describe } from "node:test";
import assert           from "node:assert";

import append from "./index.js";

describe("array append", () => {
  it("curry", () => {
    assert.strictEqual(typeof append(1), "function");
    assert.strictEqual(append(1).length, 1);
  });

  it("current value", () => {
    assert.deepStrictEqual(append(5)([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 5]);
  });
});
