import { it, describe } from "node:test";
import assert from "node:assert";

import ne from "./index.js";

describe("ne", () => {
  it("function", () => {
    assert.strictEqual(typeof ne, "function");
  });

  it("curry", () => {
    assert.strictEqual(typeof ne(1), "function");
  });

  it("current length", () => {
    assert.strictEqual(ne.length, 1);
  });

  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      for (var next = -10; next < 10; next++) {
        assert.strictEqual(ne(index)(next), index !== next);
      }
    }
  });
});
