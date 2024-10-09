import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

var id   = (x) => x;
var prop = (key) => (value) => value[key];

import("./Array/avgsBy.js").then((avgsBy) => describe("Array/avgsBy", () => {
  it("mus be avgs", () => {
    strictEqual(avgsBy(id)([1, 2, 3]), 2);
    strictEqual(avgsBy(id)([1, 2, 3, 4]), 2.5);
    strictEqual(avgsBy(id)([1, 2, 3, 4, 5]), 3);
  });

  it("must be nan if empty", () => {
    strictEqual(avgsBy(id)([]), NaN);
  });

  it("must be avgs test objects", () => {
    strictEqual(avgsBy(prop("a"))([{ a: 1 }, { a: 2 }, { a: 3 }]), 2);
    strictEqual(avgsBy(prop("a"))([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]), 2.5);
    strictEqual(avgsBy(prop("a"))([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }]), 3);
    strictEqual(avgsBy(prop("a"))([{ a: 1 }, { a: 2 }, { a: 3, b: 4 }]), 2);
  });
}));
