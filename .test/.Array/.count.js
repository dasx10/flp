import { it, describe } from "node:test";
import { strictEqual } from "node:assert";

import count from "../../Array/count.js";

describe("count", () => {
  it("current value", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const isOdd = (x) => x % 2 === 1;
    const isEven = (x) => x % 2 === 0;
    const gt0 = (x) => x > 0;
    const lt0 = (x) => x < 0;
    const is1 = (x) => x == 1;
    strictEqual(count(isEven)(array), 4);
    strictEqual(count(isOdd)(array), 5);
    strictEqual(count(lt0)(array), 0);
    strictEqual(count(gt0)(array), 9);
    strictEqual(count(is1)(array), 1);
  });
});
