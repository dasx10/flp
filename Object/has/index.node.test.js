import has from "./index.js";

import { describe, it } from "node:test";
import assert from "node:assert";

describe("has", () => {
  it("returns a function", () => {
    assert.strictEqual(typeof has("a"), "function");
  });

  it("returns a function that returns true", () => {
    assert.strictEqual(has("a")({ a: null }), true);
    assert.strictEqual(has("a")({ a: undefined }), true);
  });

  it("returns a function that returns false", () => {
    assert.strictEqual(has("b")({ a: null }), false);
    assert.strictEqual(has("b")({ a: undefined }), false);
  })
})
