import { it, describe } from "node:test";
import assert from "node:assert";

import between from "./index.js";

describe("between", () => {
  it("function", () => {
    assert.strictEqual(typeof between, "function");
  });

  it("curry", () => {
    assert.strictEqual(typeof between(0), "function");
  });

  it("current length", () => {
    assert.strictEqual(between.length, 1);
    assert.strictEqual(between(0).length, 1);
    assert.strictEqual(between(0)(0).length, 1);
  });

  it(`current value`, () => {
     for (var index = 0; index < 10; index++) {
       for (var next = index + 1; next < 11; next++) {
           assert.strictEqual(between(index)(12)(next), true);
       }
     }
  });
});
