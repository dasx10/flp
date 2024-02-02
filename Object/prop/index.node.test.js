import { it, describe } from "node:test";
import assert from "node:assert";
import prop from "./index.js";

describe("prop", () => {
  it("returns a function", () => {
    assert.strictEqual(typeof prop, "function");
    assert.strictEqual(typeof prop("a"), "function");
  });

  it("returns a function that returns a value", () => {
    assert.strictEqual(prop("a")({ a: null }), null);
    assert.strictEqual(prop("a")({ a: undefined }), undefined);
    assert.strictEqual(prop("b")({ a: null }), undefined);
    assert.strictEqual(prop("b")({}), undefined);
  });
});
