import { it, describe } from "node:test";
import assert           from "node:assert";

import uniq from "./index.js";

describe("array uniq", () => {
  it("current value primitive value", () => {
    assert.deepEqual(uniq([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(uniq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(uniq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(uniq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(uniq([10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]), [10, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("current value by objects", () => {
    assert.deepEqual(uniq([{x: 1}, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 1 }]), [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }]);
  });

  it("current value by empty", () => {
    assert.deepEqual(uniq([]), []);
  });
});
