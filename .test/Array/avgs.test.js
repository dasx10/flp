import test from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/avgs.js").then((avgs) => test("Array/avgs", () => {
  strictEqual(avgs([1, 2, 3]), 2);
  strictEqual(avgs([1, 2, 3, 4]), 2.5);
  strictEqual(avgs([]), NaN);
}));
