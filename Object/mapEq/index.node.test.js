import { it, describe } from "node:test";
import assert           from "node:assert";

import mapEq from "./index.js";

describe("mapEq", () => {
  it("current value", () => {
    const testArg = {
      age  : 1,
      name : "a",
    };

    const mapTest = mapEq(testArg);
    console.log(mapTest);
    assert.strictEqual(typeof mapTest, "object");
    assert.strictEqual(Object.keys(mapTest).every(x => typeof x === "string"), true);
    assert.strictEqual(Object.values(mapTest).every(x => typeof x === "function"), true);
  });
});
