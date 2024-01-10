import { it, describe } from "node:test";
import assert           from "node:assert";


import all from "./index.js";

var sub5    = (value) => (value - 5);
var allSub5 = all(sub5);

describe("array all", () => {
  it("curry", () => {
    assert.strictEqual(typeof allSub5, "function");
    assert.strictEqual(allSub5.length, 1);
  });

  it("current value", () => {
    assert.strictEqual(allSub5([1, 2, 3, 4, 5]), 0);
    assert.strictEqual(allSub5([1, 2, 3, 4, 5, 6]), 0);
    assert.strictEqual(allSub5([1, 2, 3, 4, 6]), 1);
    assert.strictEqual(allSub5([1, 2, 3, 4]), -1);
    assert.strictEqual(allSub5([1, 2, 3]), -2);
    assert.strictEqual(allSub5([1, 2]), -3);
    assert.strictEqual(allSub5([]), null);
  });
});

