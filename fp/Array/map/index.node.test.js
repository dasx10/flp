import { it, describe } from "node:test";
import assert from 'node:assert';

import map from "./index.js";

describe("array map", () => {
  it("curry", () => {
    assert.strictEqual(typeof map(Boolean), "function");
    assert.strictEqual(map(Boolean).length, 1);
  });

  it("current value", () => {
    const toStrings = map(String);
    const toNumbers = map(Number);
    const numbers   = [0, 1, 2, 3, 4, 5];
    const numerics  = toStrings(numbers);

    assert.deepStrictEqual(numerics, ["0", "1", "2", "3", "4", "5"]);
    assert.deepStrictEqual(toNumbers(numbers), numbers);
  });
});
