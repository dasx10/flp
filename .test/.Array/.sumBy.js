import { it, describe } from "node:test";
import assert from "node:assert";
import sumBy from "./index.js";

describe("reject", () => {
  it("current value", () => {
    var x = (x) => ({ x });
    var array = [1, 2, 3, 4].map(x);
    assert.deepStrictEqual(sumBy(x => x.x)(array), 10);
  });
});
