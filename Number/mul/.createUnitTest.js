import { describe, it } from "node:test";
import assert  from 'node:assert';
import __curry from "../../../__test__/__curry.js";

export default (mul) => {
  const mul0 = mul(0);
  const mul1 = mul(1);

  describe("mul function style", () => {
    __curry(mul, 0);

    it("must be current value ", () => {
      for (var index = 1; index < 10; index++) {
        assert.strictEqual(mul0(index), 0);
        assert.strictEqual(mul1(index), index);
        assert.strictEqual(mul(index)(index), index ** 2);
        for (var next = 0; next < 10; next++) {
          assert.strictEqual(mul(index)(next), next * index);
          assert.strictEqual(mul(next)(index), index * next);
        }
      }
    });
  });
};

