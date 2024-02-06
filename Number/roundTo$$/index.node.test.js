import { it, describe } from "node:test";
import assert from "node:assert";

import roundTo from "./index.js";

describe("roundTo", () => {
  it("current value round <", () => {
    for (let integer = 0; integer < 10; integer++) {
      for (let float = 0.001; float <= 0.05; float += 0.001) {
        const value = integer + float;
        assert.strictEqual(roundTo(value, 1), integer);
      }
    }
  });

  it("next value round >", () => {
    for (let integer = 0; integer < 10; integer++) {
      for (let float = 0.05; float <= .1; float += 0.001) {
        const value = integer + float;
        assert.strictEqual(roundTo(value, 1), integer + .1);
      }
    }
  });

  it("current value deep", () => {
    for (let integer = 0; integer < 10; integer++) {
      for (let deep = 0; deep < 10; deep++) {
        assert.strictEqual(roundTo(integer, 1), integer);
      }
    }
  });
});
