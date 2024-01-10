import { it, describe } from "node:test";
import assert           from "node:assert";

import onMapEq from "./index.js";

const identity = (value) => value;
describe("onMapEq", () => {
  it("curry", () => {
    assert.strictEqual(typeof onMapEq({ age: 40 }), "function");
    assert.strictEqual(onMapEq({ age: 40 }).length, 1);
  });

  it("current value", () => {
    const test = onMapEq({ age: 40, name: "a" })(identity);
    assert.strictEqual(Object.values(test).every(x => typeof x === "function"), true);
    assert.strictEqual(test({ age: 40, name: "a" }), true);
  });
});
