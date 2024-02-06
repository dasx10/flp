import { describe, it } from "node:test";
import assert from "node:assert";

import avg from "./index.js";
import __functionLength2 from "../../../__test__/__functionLength2.js";

describe("add", () => {
  __functionLength2(avg);

  it("current value", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = 0; next < 10; next++) {
        assert.strictEqual(avg(index, next), (index + next) / 2);
        assert.strictEqual(avg(next, index), (next + index) / 2);
      }
    }
  });
});
