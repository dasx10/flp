import { it } from "node:test";
import assert from "node:assert";

import __length from "./__length.js";

export default (value) => {
  __length(value);

  it("must have length is 2", () => {
    assert.strictEqual(value.length, 2);
  });

  return value;
};
