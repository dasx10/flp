import { it, describe } from "node:test";
import assert           from "node:assert";

import uniqRight from "./index.js";

describe("array uniq", () => {
  it("current value primitive value if all uniq", () => {
    assert.deepEqual(uniqRight([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(uniqRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("current value primitive value", () => {
    assert.deepEqual(uniqRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(uniqRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(uniqRight([10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]), [2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("current value by objects", () => {
    assert.deepEqual(uniqRight(
      [{ x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 1 }]),
      [{ x: 2 }, { x: 3 }, { x: 4 }, { x: 1 }]
    );
  });

  it("current value by empty", () => {
    assert.deepEqual(uniqRight([]), []);
  });
});
