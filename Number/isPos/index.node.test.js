import { it, describe } from "node:test";
import { strictEqual } from "node:assert";

import isPos from "./index.js";

describe("isPos", () => {
  it("should return false", () => {
    for (let i = -100; i < 0; i++) {
      strictEqual(isPos(i), false);
    }
  });

  it("should return false 0", () => {
    strictEqual(isPos(0), false);
  });

  it("should return true", () => {
    for (let i = 1; i < 100; i++) {
      strictEqual(isPos(i), true);
    }
  });
});
