import { it, describe } from "node:test";
import assert from 'node:assert';

import mapMemo from "./index.js";

const toStrings = mapMemo(String);
const toNumbers = mapMemo(Number);
const numbers   = Array.from({ length: 65534 }, (_, index) => index + 1);
const numerics  = toStrings(numbers);

describe("array map", () => {
  it("curry", () => {
    assert.strictEqual(typeof mapMemo(String), "function");
    assert.strictEqual(mapMemo(Boolean).length, 1);
  });

  it("current value", () => {
    assert.deepStrictEqual(numerics, numbers.map((value) => String(value)));
    assert.deepStrictEqual(toNumbers(numbers), numbers);
  });

  it("must be returned memoized value", () => {
    const numerics2 = toStrings(numbers);
    assert.strictEqual(numerics, numerics2);

    const numbers2 = toNumbers(numbers);
    const numbers3 = toNumbers(numbers);

    assert.strictEqual(numbers3, numbers2);
  });

  it("must be returned memoized value if is function before", () => {
    const toString2 = mapMemo(String);
    const toString3 = mapMemo(String);

    const numerics2 = toString2(numbers);
    const numerics3 = toString3(numbers);

    assert.strictEqual(numerics3, numerics2);
  });
});
