import { it, describe } from "node:test";
import assert from "node:assert";

import inc from "./index.js";

describe("inc", () => {
  for (var index = -10; index < 10; index++) {
    it(`current value ${index}`, () => {
      assert.strictEqual(inc(index), index + 1);
    });
  }
});
