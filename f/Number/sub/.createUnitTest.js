import { describe, it } from "node:test";
import assert from 'node:assert';
import __curry from "../../../__test__/__curry.js";

export default (sub) => {
  describe("subtract functional style", () => {
    __curry(sub, 0);

    it("current value", () => {
      for (var index = 0; index < 10; index++) {
        for (var next = 0; next < 10; next++) {
          assert.strictEqual(sub(index)(next), next - index);
          assert.strictEqual(sub(next)(index), index - next);
        }
      }
    });
  });
};

