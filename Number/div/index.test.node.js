import test, { describe } from "node:test";
import assert from 'node:assert';

import div from "./index.js";

describe("division", () => {
  test("current value", () => {
    assert.strictEqual(div(5)(20), 4);
  });

  test("current length", () => {
    assert.strictEqual(div(2).length, 1);
  });
});
