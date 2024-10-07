import { describe, it } from "node:test";
import { deepStrictEqual } from "node:assert";

import("../../Array/filter.js").then((filter) => describe("Array/filter", () => {
  it("not empty", () => {
    deepStrictEqual(filter(Boolean)([1, 2, 3]), [1, 2, 3]);
  });

  it("empty", () => {
    deepStrictEqual(filter(Number)([]), []);
  });

  it("not empty must be full array", () => {
    deepStrictEqual(filter(x => x > 0)([1, 2, 3]), [1, 2, 3]);
  });

  it("not empty must be empty array", () => {
    deepStrictEqual(filter(x => x > 3)([1, 2, 3]), []);
    deepStrictEqual(filter(x => x < 1)([1, 2, 3]), []);
    deepStrictEqual(filter(x => x === 4)([1, 2, 3]), []);
    deepStrictEqual(filter(x => x === 0)([1, 2, 3]), []);
  });

  it("not empty correct call", () => {
    deepStrictEqual(filter(x => x > 1)([1, 2, 3]), [2, 3]);
    deepStrictEqual(filter(x => x > 2)([1, 2, 3]), [3]);
    deepStrictEqual(filter(x => x < 3)([1, 2, 3]), [1, 2]);
    deepStrictEqual(filter(x => x < 2)([1, 2, 3]), [1]);
    deepStrictEqual(filter(x => x === 1)([1, 2, 3]), [1]);
    deepStrictEqual(filter(x => x === 2)([1, 2, 3]), [2]);
    deepStrictEqual(filter(x => x === 3)([1, 2, 3]), [3]);
    deepStrictEqual(filter(x => x === 1)([1, 2, 3, 1]), [1, 1]);
  });
}));
