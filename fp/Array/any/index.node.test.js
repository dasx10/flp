import { it, describe } from "node:test";
import assert from 'node:assert';

import any from "./index.js";

const identity = (value) => value;
const anyOne = any(identity);

describe("array any", () => {
  it("curry", () => {
    assert.strictEqual(typeof anyOne, "function");
    assert.strictEqual(anyOne.length, 1);
  });

  it("current value", () => {
    assert.strictEqual(anyOne([1, 2, 3, 4]), 1);
    assert.strictEqual(anyOne([0, 1, 2, 3]), 1);
    assert.strictEqual(anyOne([0, 0, 0]), 0);
    assert.strictEqual(anyOne([]), undefined);
  });
});
