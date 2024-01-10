import { it } from "node:test";
import assert from "node:assert";

export default (call) => {
  it("must be function", () => {
    assert.strictEqual(typeof call, "function");
  });

  return call;
};
