import { it } from "node:test";
import assert from "node:assert";

export default (value) => {
  it("must have property length", () => {
    assert.strictEqual(Reflect.has(value, "length"), true);
  });

  it("length must be number", () => {
    assert.strictEqual(typeof value.length, "number");
  });

  return value;
};
