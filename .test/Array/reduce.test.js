import test from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/reduce.js").then((reduce) => test("Array/reduce", () => {
  const add = (y) => (x) => x + y;
  strictEqual(reduce(add)(0)([1, 2, 3]), 6);
  strictEqual(reduce(add)(0)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55);
}));
