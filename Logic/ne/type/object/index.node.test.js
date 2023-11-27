import test, { describe } from "node:test";
import assert from "node:assert";

import neTypeObject from "./index.js";

describe("ne object", () => {
  test("number", () => {
    assert.strictEqual(
      neTypeObject({}),
      false,
    );
  });
});
