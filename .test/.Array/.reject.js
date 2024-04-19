import { it, describe } from "node:test";
import { deepStrictEqual } from "node:assert";
import reject from "../../Array/reject.js";

describe("reject", () => {
  it("current value", () => {
    deepStrictEqual(reject(x => x > 3)([1, 2, 3, 4, 5]), [1, 2, 3]);
  });
});
