
import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

export default (mul) => {
  describe("mul procedure style", () => {
    __functionLength2(mul);

    it("must be always zero if use zero", () => {
      for (var index = 0; index < 10; index++) {
        assert.strictEqual(mul(0, index), 0);
        assert.strictEqual(mul(index, 0), 0);
      }
    });

    it("must be current value if use integer", () => {
      for (var index = 0; index < 10; index++) {
        for (var next = 0; next < 10; next++) {
          assert.strictEqual(mul(index, next), index * next);
          assert.strictEqual(mul(next, index), next * index);
        }
      }
    });

    it("must be current value if use float ", () => {
      for (var index = 0; index < 10; index++) {
        for (var next = 0; next < 10; next++) {
          for (var float = 0.1; float < .9; float += 0.1) {
            var currentFloat = index + float;
            assert.strictEqual(mul(currentFloat, next), currentFloat * next);
            assert.strictEqual(mul(next, currentFloat), next * currentFloat);
          }
        }
      }
    });
  });
};

