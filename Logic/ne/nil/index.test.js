import test, { describe } from "node:test";
import assert from 'node:assert';

import notNil from "./index.js";

describe("array filter", () => {
  test("current value true", () => {
    assert.strictEqual(notNil(0), true);
    assert.strictEqual(notNil(false), true);
    assert.strictEqual(notNil(""), true);
    assert.strictEqual(notNil(0n), true);
    assert.strictEqual(notNil({}), true);
    assert.strictEqual(notNil([]), true);
  });

  test("current value false", () => {
    assert.strictEqual(notNil(undefined), false);
    assert.strictEqual(notNil(null), false);
  });
});
