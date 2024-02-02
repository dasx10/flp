import test, { describe } from "node:test";
import assert from 'node:assert';

import eq from "./index.js";

describe("string eq", () => {
  test("current value", () => {
    assert.strictEqual(eq("")(""), true);
    assert.strictEqual(eq("a")("a"), true);
  });

  test("invalid value", () => {
    assert.strictEqual(eq("a")("A"), false);
    assert.strictEqual(eq("A")("a"), false);
    assert.strictEqual(eq("")("a"), false);
    assert.strictEqual(eq("a")(""), false);
  });

  test("current length", () => {
    assert.strictEqual(eq("").length, 1);
  });
});
