import test from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/at.js").then((at) => test("Array/at", () => {
  strictEqual(at(0)([1, 2, 3]), 1);
  strictEqual(at(1)([1, 2, 3]), 2);
  strictEqual(at(2)([1, 2, 3]), 3);
  strictEqual(at(3)([1, 2, 3]), undefined);
  strictEqual(at(4)([1, 2, 3]), undefined);
  strictEqual(at(5)([1, 2, 3]), undefined);
  strictEqual(at(-1)([1, 2, 3]), 3);
  strictEqual(at(-2)([1, 2, 3]), 2);
  strictEqual(at(-3)([1, 2, 3]), 1);
  strictEqual(at(-4)([1, 2, 3]), undefined);
  strictEqual(at(-5)([1, 2, 3]), undefined);
}));
