import { it, describe } from "node:test";
import assert from "node:assert";

import dec from "./index.js";

describe("dec", () => {
  it(`current value`, () => {
    for (var index = -10; index < 10; index++) {
        assert.strictEqual(dec(index), index - 1);
    }
  });
});
