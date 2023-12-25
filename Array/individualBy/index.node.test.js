import test, { describe } from "node:test";
import assert from 'node:assert';

import individualBy from "./index.js";

const identity = (value) => value;
const individual = individualBy(identity);

describe("individualBy", () => {
  test("curry", () => {
    assert.strictEqual(typeof individual, "function");
    assert.strictEqual(individual.length, 1);
  });

  test("current value", () => {
    assert.deepStrictEqual(individual([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
