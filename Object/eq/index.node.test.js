import test, { describe } from "node:test";
import assert from 'node:assert';

import eq from "./index.js";

const testObject = Object.freeze({
  a: {
    b: {
      a: 1,
      b: "b",
      c: {
        a: 2,
        b: "2",
      },
      d: [1, 2, 3, { a: 1, b: "b" }],
    }
  }
});

const nextObj = JSON.parse(JSON.stringify(testObject));

describe("equals", () => {
  test("current true", () => {
    assert.deepStrictEqual(
      eq(testObject)(nextObj),
      true,
    );
  });

  test("current false", () => {
    assert.deepStrictEqual(
      eq(testObject)({ ...nextObj, a: 2 }),
      false,
    );
  });
});
