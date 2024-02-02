import { it, describe } from "node:test";
import assert from "node:assert";

import div from "./index.js";

import __functionLength2 from "../../../__test__/__functionLength2.js";

describe("div procedure style", () => {
  __functionLength2(div);

  it("current value", () => {
    for (var index = -10; index < 10; index++) {
      for (var next = -10; next < 10; next++) {
        assert.strictEqual(div(index, next), index / next);
        assert.strictEqual(div(next, index), next / index);
      }
    }
  });
});
