import test from "node:test";
import { strictEqual } from "node:assert";

import("../../Array/avgsBy.js")
  .then((avgsBy) => test("Array/avgsBy", () => {
    var id = (x) => x;

    strictEqual(avgsBy(id)([]), NaN);
    strictEqual(avgsBy(id)([1, 2, 3]), 2);
    strictEqual(avgsBy(id)([1, 2, 3, 4]), 2.5);
    strictEqual(avgsBy(id)([1, 2, 3, 4, 5]), 3);

    var prop = (key) => (value) => value[key];

    strictEqual(avgsBy(prop("a"))([{ a: 1 }, { a: 2 }, { a: 3 }]), 2);
    strictEqual(avgsBy(prop("a"))([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]), 2.5);
    strictEqual(avgsBy(prop("a"))([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }]), 3);
    strictEqual(avgsBy(prop("a"))([{ a: 1 }, { a: 2 }, { a: 3, b: 4 }]), 2);
  }))
;
