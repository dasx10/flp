import test from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/isArray.js").then((isArray) => test("Array/isArray", () => {
  strictEqual(isArray(0), false);
  strictEqual(isArray(""), false);
  strictEqual(isArray([]), true);
  strictEqual(isArray({}), false);
  strictEqual(isArray({ length: 0 }), false);
}));
