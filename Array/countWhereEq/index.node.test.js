import { it, describe } from "node:test";
import assert from 'node:assert';


import testArray from "../__test__/users.json" assert { type: "json" };
import countWhereEq from "./index.js";

describe("array countWhereEq", () => {
  it("curry", () => {
    assert.strictEqual(typeof countWhereEq({}), "function");
    assert.strictEqual(countWhereEq({}).length, 1);
  });

  it("current value", () => {
    const result = countWhereEq({ name: "John" })(testArray);
    const mustBe = testArray.filter((user) => user.name === "John").length;

    assert.strictEqual(result, mustBe);
  });

  it("current value object", () => {
    const resultObject = countWhereEq({
      special  : {
        health       : 100,
        strength     : 100,
        speed        : 100,
        intelligence : 100,
        luck         : 100,
        charisma     : 100,
        mana         : 0
      }
    })(testArray);

    const mustBeObject = testArray.filter((user) => (
      (user.special.health       === 100) &&
      (user.special.strength     === 100) &&
      (user.special.speed        === 100) &&
      (user.special.intelligence === 100) &&
      (user.special.luck         === 100) &&
      (user.special.charisma     === 100) &&
      (user.special.mana         === 0)
    )).length;

    assert.strictEqual(resultObject, mustBeObject);
  });

  it("current value array", () => {
    const resultArray = countWhereEq({
      tags: ["weapon"]
    });

    const mustBeArray = testArray.filter((user) => (
      user.tags.length === 1 && user.tags[0] === "weapon"
    ));

    assert.strictEqual(resultArray(mustBeArray), mustBeArray.length);
  });
});
