import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("./Array/avgs.js").then((avgs) => describe("Array/avgs", () => {
  it("must return the average", () => {
    strictEqual(avgs([1, 2, 3]), 2);
    strictEqual(avgs([1, 2, 3, 4]), 2.5);
  });

  it("must be a value", () => {
    strictEqual(avgs([1]), 1);
    strictEqual(avgs([2]), 2);
  });

  it("must be NaN if empty", () => {
    strictEqual(avgs([]), NaN);
  });
}));
