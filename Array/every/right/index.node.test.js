import { it, describe } from "node:test";
import assert           from "node:assert";

import everyRight from "./index.js";

describe("array everyRight", () => {
  it("current value false", () => {
    assert.deepStrictEqual(everyRight(x => x > 5)([1, 2, 3, 4, 5, 6, 7, 8, 9]), false);
  });

  it("current value true", () => {
    assert.deepStrictEqual(everyRight(x => x > 5)([6, 7, 8, 9]), true);
  });
});
