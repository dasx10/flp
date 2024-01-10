import test, { describe } from "node:test";
import assert from 'node:assert';
import millisecondsPerMinute from "./index.js";

describe("millisecondsPerMinute", () => {
  test("current value", () => {
    assert.strictEqual(millisecondsPerMinute(), 60000);
  });
});
