import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("./Array/contains").then((contains) => describe("Array/contains", () => {
  it("contains", () => {
    strictEqual(contains(1)([1, 2, 3]), true);
  });

  it("not contains", () => {
    strictEqual(contains(0)([1, 2, 3]), false);
  });

  it("empty", () => {
    strictEqual(contains(1)([]), false);
  });
}));
