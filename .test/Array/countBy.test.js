import { describe, it } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";

import("../../Array/countBy.js").then((countBy) => describe("Array/countBy", () => {
  it("not empty", () => {
    const obj = countBy(Math.abs)([1, 2, 3, -1]);
    const res = { 1: 2, 2: 1, 3: 1 };
    for (const key in obj) deepStrictEqual(obj[key], res[key]);
  });

  it("empty", () => {
    deepStrictEqual(countBy(Math.abs)([]), Object.create(null));
  });
}));
