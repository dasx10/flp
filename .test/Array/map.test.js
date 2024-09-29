import test from "node:test";
import { deepStrictEqual } from "node:assert";

import("../../Array/map.js").then((map) => test("Array/map", () => {
  deepStrictEqual(map(String)([1, 2, 3]), ["1", "2", "3"]);
}));
