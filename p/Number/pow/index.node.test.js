import { it, describe } from "node:test";
import assert from "node:assert";
import __functionLength2 from "../../../__test__/__functionLength2.js";

import pow from "./index.js";

describe("pow", () => {
  __functionLength2(pow);

  it("test by integer ", () => {
    for (var index = 0; index < 10; index++) {
      for (var next = 0; next < 10; next++) {
        assert.strictEqual(pow(index, next), index ** next);
      }
    }
  });
});
