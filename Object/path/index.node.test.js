import path from "./index.js";

import { describe, it } from "node:test";
import assert from "node:assert";

var value2 = { a: { b: true }};
var value3 = { a: { b: { c: true }}};

describe("path", () => {
  it("returns a function", () => {
    assert.strictEqual(typeof path(["a", "b"]), "function");
  });

  it("returns a function that returns true", () => {
    assert.strictEqual(path(["a", "b"])(value2), true);
    assert.strictEqual(path(["a", "b", "c"])(value3), true);
  })

  it("returns a function that returns undefined", () => {
    assert.strictEqual(path(["a", "c"])(value2), undefined);
    assert.strictEqual(path(["a", "b", "c"])(value2), undefined);
    assert.strictEqual(path(["a", "b", "c", "d"])(value3), undefined);
  });
});
