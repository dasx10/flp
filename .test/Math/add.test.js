import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../Math/add.js").then((add) => describe("Math/add", () => {
  it("must be id", () => {
    var id = add(0);
    strictEqual(id, add(0));
  });

  it("must be add", () => {
    strictEqual(add(1)(2), 1 + 2);
  })
}));
