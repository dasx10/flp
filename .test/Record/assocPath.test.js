import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Record/assocPath.js").then((assocPath) => describe("Record/assocPath", () => {
  it("must be empty", () => {
    strictEqual(assocPath([])(1)({ a: 10 }), 1);
  });

  it("must be equal", () => {
    strictEqual(assocPath(["y"])(1)({ a: 10 }).y, 1);
  });

  it("not empty deep", () => {
    strictEqual(assocPath(["y", "x"])(1)({ a: 10 })["y"]["x"], 1);
  });
}));
