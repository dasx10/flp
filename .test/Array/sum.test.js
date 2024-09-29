import { describe, it } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";

import("../../Array/sum.js").then((sum) => describe("Array/sum", () => {
  it("not empty", () => {
    var values = [1, 2, 3];
    strictEqual(sum(values), 6);
  });

  it("empty", () => {
    var values = [];
    strictEqual(sum(values), 0);
  });
}));
