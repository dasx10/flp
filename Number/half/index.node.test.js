import { it, describe } from "node:test";
import assert from "node:assert";

import half from "./index.js";

describe("half", () => {
  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
      assert.strictEqual(half(index), index / 2);
    }
  });
});
