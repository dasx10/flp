import { it, describe } from "node:test";
import assert           from "node:assert";

import after from "./index.js";

describe("array after", () => {
  it("curry", () => {
    var after3 = after(3);
    assert.strictEqual(typeof after3, "function");
    assert.strictEqual(after3.length, 1);
  });

  it("current value", () => {
    assert.deepStrictEqual(after(5)([1, 2, 3, 4, 5, 6, 7, 8, 9]), [6, 7, 8, 9]);
  });
});
