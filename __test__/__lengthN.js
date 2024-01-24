import { it } from "node:test";
import assert from "node:assert";

import __length from "./__length.js";

export default (length) => (value) => {
  __length(value);

  it("must have length is " + length, () => {
    assert.strictEqual(value.length, length);
  });

  return value;
};
