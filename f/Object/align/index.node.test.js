import align from "./index.js";

import { describe, it } from "node:test";
import assert from "node:assert";

var testObject = Object.freeze({
  e: 14,
  d: 13,
  a: 10,
  b: 11,
  f: 15,
  c: 12,
});

var aligned = align(testObject);

describe("align", () => {
  it("returns a function", () => {
    assert.strictEqual(typeof align, "function");
  });

  it("returns a function that returns an object", () => {
    assert.deepEqual(aligned, testObject);
  });

  it("returns a function that returns an sorted keys", () => {
    assert.deepEqual(Object.keys(aligned), ["a", "b", "c", "d", "e", "f"]);
  });
});
