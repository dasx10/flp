import { describe, it } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";

import("../../Array/sumBy.js").then((sumBy) => describe("Array/sumBy", () => {
  it("not empty", () => {
    var values = [1, 2, 3];
    strictEqual(sumBy(Number)(values), 6);
  });

  it("empty", () => {
    var values = [];
    strictEqual(sumBy(Number)(values), 0);
  });

  it("not empty use call", () => {
    var values = [-1, -2, -3];
    strictEqual(sumBy(Math.abs)(values), 6);
  });
}));
