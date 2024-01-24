import { it, describe } from "node:test";
import assert from 'node:assert';

import __curry from "../../../__test__/__curry.js";

export default (div) => {
  describe("div functional style", () => {
    __curry(div, 1);

    it("current value", () => {
      for (var index = 0; index < 10; index++) {
        for (var next = 0; next < 10; next++) {
          assert.strictEqual(div(next)(index), index / next);
          assert.strictEqual(div(index)(next), next / index);
        }
      }
    });
  });
};
