import reduce from "./index.js";

import { describe, it } from "node:test";
import assert from "node:assert";

const testObject = Object.freeze({
  a: 1,
  b: 2,
  c: 3,
  d: 4,
});

describe("reduce", () => {
  it("returns a function", () => {
    assert.strictEqual(typeof reduce(x => x), "function");
    assert.strictEqual(typeof reduce(x => x)(0), "function");
  });

  it("returns a function that returns a value", () => {
    assert.strictEqual(reduce(y => x => x + y)(0)(testObject), 1 + 2 + 3 + 4);
  });
});
