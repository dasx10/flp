import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("./Array/at.js").then((at) => describe("Array/at", () => {
  const values = [1, 2, 3]
  it("must first", () => {
    strictEqual(at(0)(values), values[0]);
  });

  it("must next", () => {
    strictEqual(at(1)(values), values[1]);
  });

  it("must last", () => {
    strictEqual(at(2)(values), values[2]);
  });

  it("must be undefined", () => {
    strictEqual(at(3)(values), void 0);
  });

  it("must be last by negative", () => {
    strictEqual(at(-1)(values), values[values.length - 1]);
  });

  it("must be next by negative", () => {
    strictEqual(at(-2)(values), values[values.length - 2]);
  });

  it("must be first by negative", () => {
    strictEqual(at(-3)(values), values[values.length - 3]);
  });

  it("must be undefined by negative", () => {
    strictEqual(at(-4)(values), void 0);
  });

  it("must be undefined empty array", () => {
    strictEqual(at(0)([]), void 0);
  });

  it("must be undefined by negative empty array", () => {
    strictEqual(at(-1)([]), void 0);
  });
}));
