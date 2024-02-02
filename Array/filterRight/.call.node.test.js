import { it, describe } from "node:test";
import assert from "node:assert";

import filterRight from "./index.js";
import gt from "../../../f/Number/gt/index.js";
import lt from "../../../f/Number/lt/index.js";
import eq from "../../../f/Number/eq/index.js";

const testArray = Array.from({ length: 65534 }, (_, index) => index + 1);

// const gt = (next) => (value) => value > next;
// const lt = (next) => (value) => value < next;
// const eq = (next) => (value) => value === next;

describe("filterRight", () => {
  it("current value", () => {
    const depth = 10;

    for (let index = 0; index < depth; index++) {
      assert.deepEqual(filterRight(testArray, gt(index)), testArray.filter(gt(index)));
      assert.deepEqual(filterRight(testArray, lt(index)), testArray.filter(lt(index)));
      assert.deepEqual(filterRight(testArray, eq(index)), testArray.filter(eq(index)));
    }

  });
})
