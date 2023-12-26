import test, { describe } from "node:test";
import assert from 'node:assert';

import concatRight from "./index.js";

describe("array concat right", () => {
  test("curry", () => {
    assert.strictEqual(typeof concatRight([1, 2, 3]), "function");
    assert.strictEqual(concatRight([1, 2, 3]).length, 1);
  });

  test("current value", () => {
    assert.deepStrictEqual(
      concatRight
      ([1, 2, 3])
      ([4, 5, 6])
      ,
      [1, 2, 3, 4, 5, 6]
    );
  });
});
