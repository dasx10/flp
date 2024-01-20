import { it, describe } from "node:test";
import assert from "node:assert";

import compose from "./index.js";

var add = (y) => (x) => x + y;

describe("pipeAsync", () => {
  it("current all sync value", () => {
    assert.strictEqual(compose(3, [add(1), add(2)]), 6);
    assert.strictEqual(compose(3, [String, add(1), add(2)]), "6");
  });
});
