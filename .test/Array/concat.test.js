import { describe, it } from "node:test";
import { deepStrictEqual } from "node:assert";

import("../../Array/concat.js").then((concat) => describe("Array/concat", () => {
  it("not empty", () => {
    deepStrictEqual(concat([1, 2, 3])([4, 5, 6]), [4, 5, 6, 1, 2, 3]);
  });

  it("left empty right not empty", () => {
    deepStrictEqual(concat([])([1, 2, 3]), [1, 2, 3]);
  });

  it("left not empty right empty", () => {
    deepStrictEqual(concat([1, 2, 3])([]), [1, 2, 3]);
  });

  it("empties", () => {
    deepStrictEqual(concat([])([]), []);
  });

  it("replay", () => {
    const x1 = [1, 2, 3];
    const x2 = [4, 5, 6];

    const x2x1_1 = concat(x1)(x2);
    const x2x1_2 = concat(x1)(x2);

    deepStrictEqual(x2x1_1, x2x1_2);

    const x2x1x1 = concat(x1)(x2x1_1);
    const x2x1x2 = concat(x2)(x2x1_1);

    deepStrictEqual(x2x1x1, [...x2, ...x1, ...x1]);
    deepStrictEqual(x2x1x2, [...x2, ...x1, ...x2]);
  })
}));
