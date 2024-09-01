import test from "node:test";
import { strictEqual } from "node:assert";

import is from "../is.js";

test("is", () => {
  for (let i = 0; i < 100; i++) {
    strictEqual(is(i)(i), true);
    strictEqual(is(i)(i + 1), false);
  }
});
