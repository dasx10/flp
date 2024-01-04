import { it, describe } from "node:test";
import assert from 'node:assert';

import trap from "./index.js";

const timeout = (value) => new Promise((resolve) => setTimeout(resolve, value, value));

describe("trap", () => {
  it("curry", () => {
    assert.strictEqual(typeof trap(Date.now), "function");
    assert.strictEqual(trap(Date.now).length, 1);
  });

  it("current value", () => {
    const trapTimeout = trap(timeout);
    const wait1 = trapTimeout(4);
    assert.strictEqual(wait1, trapTimeout(4));
    const wait3 = trapTimeout(2000);
    assert.notStrictEqual(wait1, wait3);

    wait1.then(() => {
      assert.notStrictEqual(wait1, trapTimeout(4));
      assert.strictEqual(wait3, trapTimeout(2000));
    });
  });
});
