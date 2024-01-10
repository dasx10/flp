import { it, describe } from "node:test";
import assert from "node:assert";

import _pow from "./index.js";

describe("pow", () => {
  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = 0; next < 10; next++) {
          assert.strictEqual(_pow(index, next), index ** next);
      }
    }
  });
});
