import test, { describe } from "node:test";

import assert from 'node:assert';
import erase from "./index.js";

describe("array none", () => {
  test("current value", () => {
    assert.strictEqual(erase(/[0-9]/g)("a1b2c3"), "abc");
  });
});
