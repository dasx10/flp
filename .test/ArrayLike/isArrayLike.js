import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import("../../ArrayLike/isArrayLike.js").then((isArrayLike) => describe("ArrayLike/isArrayLike", () => {
  it("must be array like", () => {
    strictEqual(isArrayLike([]), true);
    strictEqual(isArrayLike({ length: 0 }), true);
    strictEqual(isArrayLike({ length: 1, 0: 0 }), true);
    strictEqual(isArrayLike({ length: 1, 0: 0 }), true);
  });

  it("must not be array like", () => {
    strictEqual(isArrayLike(0), false);
    strictEqual(isArrayLike(null), false);
    strictEqual(isArrayLike(undefined), false);
    strictEqual(isArrayLike(NaN), false);
    strictEqual(isArrayLike(false), false);
    strictEqual(isArrayLike(() => {}), false);
  });
}));
