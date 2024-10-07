import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/empty.js").then((empty) => describe("Array/empty", () => {
  it("must be empty", () => {
    strictEqual(empty().length, 0);
  });

  it("must be equal", () => {
    strictEqual(empty(), empty());
  })
}));
