import { it, describe } from "node:test";
import assert from 'node:assert';

import div from "./index.js";

describe("division", () => {
  it("function", () => {
    assert.strictEqual(typeof div, "function");
  });

  it("curry", () => {
    assert.strictEqual(typeof div(1), "function");
  });

  it("current length", () => {
    assert.strictEqual(div.length, 1);
    assert.strictEqual(div(1).length, 1);
  });

  it("current value", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = 0; next < 10; next++) {
        assert.strictEqual(div(next)(index), index / next);
        assert.strictEqual(div(index)(next), next / index);
      }
    }
  });
});
