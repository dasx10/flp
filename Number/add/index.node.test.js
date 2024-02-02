import { it, describe } from "node:test";
import assert from 'node:assert';

import add from "./index.js";
import __curry from "../../__test__/__curry.js";

describe("add functional style", () => {
  __curry(add, 0);

  it("current value", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = 0; next < 10; next++) {
        assert.strictEqual(add(index)(next), index + next);
        assert.strictEqual(add(next)(index), next + index);
      }
    }
  });
});
