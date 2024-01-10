import test, { describe } from "node:test";
import assert from 'node:assert';
import millisecondsPerSecond from "./index.js";

describe("millisecondsPerMinute", () => {
  test("current value", () => {
    assert.strictEqual(millisecondsPerSecond(), 1000);
  });
});
