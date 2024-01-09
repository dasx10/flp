import test, { describe } from "node:test";
import assert from 'node:assert';

import bank from "./index.js";


describe("bank", () => {
  test("current value", () => {
    assert.deepStrictEqual(
      bank([
        x => x - 1,
        x => x,
        x => x + 1,
        x => x * 2,
        x => x * x,
        x => x ** 2,
        x => x ** x,
      ])(3), [
        3 - 1,
        3,
        3 + 1,
        3 * 2,
        3 * 3,
        3 ** 2,
        3 ** 3,
      ]);
  });
});
