import test from "node:test";
import { deepStrictEqual } from "node:assert";

import sort from "../../Array/sort.js";

const arraySorted = (length) => Array.from({ length }, (_, i) => i);
const array       = (length) => arraySorted(length).sort(Math.random);

const asc  = (y) => (x) => x - y;
const desc = (y) => (x) => y - x;

test("Array/sort", () => {
  deepStrictEqual(sort(asc)(array(10)), arraySorted(10));
  deepStrictEqual(sort(desc)(array(10)), arraySorted(10).reverse());
  deepStrictEqual(sort(desc)(array(100)), arraySorted(100).reverse());
  deepStrictEqual(sort(asc)(array(100)), arraySorted(100));
});
