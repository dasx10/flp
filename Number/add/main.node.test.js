import { describe, it } from "node:test";
import assert from "node:assert";
import add from "./index.js";
import __functionLength2 from "../../__test__/__functionLength2.js";

describe("add procedure style", () => {
  __functionLength2(add);

  it("current value", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = 0; next < 10; next++) {
        assert.strictEqual(add(index, next), index + next);
        assert.strictEqual(add(next, index), next + index);
      }
    }
  });
});
