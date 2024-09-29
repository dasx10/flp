import test from "node:test";
import { deepStrictEqual } from "node:assert";

import select from "../../Array/select.js";

const array = Array.from({length:100},(_,i)=>i);

test("Array/select", () => {
  deepStrictEqual(select([0, 1])(array), [0, 1]);
  deepStrictEqual(select([1, 1])(array), [1, 1]);
  deepStrictEqual(select([1, 0])(array), [1, 0]);
  deepStrictEqual(select([1, 1])(array.map(String)), ["1", "1"]);
});
