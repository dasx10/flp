import { it, describe } from "node:test";
import assert from "node:assert";

import mul from "./index.js";

describe("mul", () => {
  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = 0; next < 10; next++) {
        assert.strictEqual(mul(index, next), index * next);
        assert.strictEqual(mul(next, index), next * index);
      }
    }
  });

  it("test by float ", () => {
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
