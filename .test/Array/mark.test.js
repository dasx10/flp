import test from "node:test";
import { deepStrictEqual } from "node:assert";

import("../../Array/mark.js").then((mark) => test("Array/mark", () => {
  deepStrictEqual(mark(0)([1, 2, 3]), [1, 2, 3, 0]);
  deepStrictEqual(mark(0)([0, 1, 2, 3]), [1, 2, 3]);
}));
