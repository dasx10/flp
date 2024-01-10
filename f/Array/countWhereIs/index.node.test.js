import { it, describe } from "node:test";
import assert from 'node:assert';


import testArray from "../__test__/users.json" assert { type: "json" };
import countWhereIs from "./index.js";

describe("array countWhereEq", () => {
  it("curry", () => {
    assert.strictEqual(typeof countWhereIs({}), "function");
    assert.strictEqual(countWhereIs({}).length, 1);
  });

  it("current value", () => {
    const result = countWhereIs({ name: "John" })(testArray);
    const mustBe = testArray.filter((user) => user.name === "John").length;

    assert.strictEqual(result, mustBe);
  });
});
