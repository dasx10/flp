import test, { describe } from "node:test";
import assert from 'node:assert';

import constructorIs from "./index.js";

describe("constructorIdentical", () => {
  test("current value true", () => {
    assert.strictEqual(constructorIs(String)(""), true);
    assert.strictEqual(constructorIs(Number)(0), true);
  });

  test("current value false", () => {
    assert.strictEqual(constructorIs(Number)(""), false);
    assert.strictEqual(constructorIs(String)(0), false);
  });
});
