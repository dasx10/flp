import { it, describe } from "node:test";
import assert from 'node:assert';

import add from "./index.js";

describe("add", () => {
  it("function", () => {
    assert.strictEqual(typeof add, "function");
  });

  it("curry", () => {
    assert.strictEqual(typeof add(1), "function");
  });

  it("current length", () => {
    assert.strictEqual(add.length, 1);
    assert.strictEqual(add(1).length, 1);
  });

  it("current value", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = 0; next < 10; next++) {
        assert.strictEqual(add(index)(next), index + next);
        assert.strictEqual(add(next)(index), next + index);
      }
    }
  })
});
