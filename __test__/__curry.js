import { it } from "node:test";
import assert from "node:assert";

const mustBeFunction = (call) => assert.strictEqual(typeof call, "function");

export default (call, ...values) => {
  it("must be curry", () => {
    let current = call(values[0]);
    mustBeFunction(current);
    for (let index = 1; index < values.length; index++) {
      current = current(values[index]);
      mustBeFunction(current);
    }
  });

  return call;
};
