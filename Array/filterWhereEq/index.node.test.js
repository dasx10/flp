import { it, describe } from "node:test";
import assert           from "node:assert";

import filterWhereEq from "./index.js";

import users from "../__test__/users.json" assert { type: "json" };

describe("array filterWhereEq", () => {
  it("curry", () => {
    assert.strictEqual(typeof filterWhereEq({ age: 40 }), "function");
    assert.strictEqual(filterWhereEq({ age: 40 }).length, 1);
  });

  it("current value", () => {
    const filterWhereAge20 = filterWhereEq({ age: 20 });
    const result = filterWhereAge20(users);
    const mustBe = users.filter((user) => user.age === 20);
    assert.deepStrictEqual(result, mustBe);
  });

  it("current value array", () => {
    const filterWhereWeapon = filterWhereEq({ tags: ["weapon"] });
    const result = filterWhereWeapon(users);
    const mustBe = users.filter((user) => user.tags.length === 1 && user.tags[0] === ("weapon"));
    assert.deepStrictEqual(result, mustBe);

    const filterWhereWeaponSuper = filterWhereEq({ tags: ["weapon", "super"] });
    const result2 = filterWhereWeaponSuper(users);
    const mustBe2 = users.filter((user) => user.tags.length === 2 && user.tags[0] === ("weapon") && user.tags[1] === ("super"));
    assert.deepStrictEqual(result2, mustBe2);

    const filterWhereSuperWeapon = filterWhereEq({ tags: ["super", "weapon"] });
    const result3 = filterWhereSuperWeapon(users);
    const mustBe3 = users.filter((user) => user.tags.length === 2 && user.tags[0] === ("super") && user.tags[1] === ("weapon"));
    assert.deepStrictEqual(result3, mustBe3);
  });

});
