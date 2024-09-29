import test from "node:test";
import { deepStrictEqual } from "node:assert";

import("../../Array/sort.js").then((sort) => test("Array/sort", () => {
  var from        = Array.from;
  var arraySorted = (length) => from({ length }, (_, i) => i);
  var array       = (length) => arraySorted(length).sort(Math.random);
  var asc       = (y) => (x) => x - y;
  var desc      = (y) => (x) => y - x;
  var sorted10  = arraySorted(10);
  var sorted100 = arraySorted(100);
  var sortDesc  = sort(desc);
  var sortAsc   = sort(asc);
  var assert    = deepStrictEqual;
  assert(sortAsc(array(10)), sorted10);
  assert(sortDesc(array(10)), sorted10.reverse());
  assert(sortAsc(array(100)), sorted100);
  assert(sortDesc(array(100)), sorted100.reverse());
}));
