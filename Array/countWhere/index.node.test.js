import { it, describe } from "node:test";
import assert from 'node:assert';

import testArray from "../__test__/users.json" assert { type: "json" };
import countWhere from "./index.js";

describe("array countWhere", () => {
  it("curry", () => {
    assert.strictEqual(typeof countWhere({}), "function");
    assert.strictEqual(countWhere({}).length, 1);
  });

  it("current value", () => {
    const result = countWhere({ name: (name) => name === "John" })(testArray);
    const mustBe = testArray.filter((user) => user.name === "John").length;

    assert.strictEqual(result, mustBe);

    const result2 = countWhere({ tags: (tags) => tags.includes("weapon") })(testArray);
    const mustBe2 = testArray.filter((user) => user.tags.includes("weapon")).length;

    assert.strictEqual(result2, mustBe2);

  });
});
