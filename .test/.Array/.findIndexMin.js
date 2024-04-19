import { it, describe } from "node:test";
import { strictEqual } from "node:assert";
import findIndexMax from "../../Array/findIndexMax.js";

describe("reject", () => {
  it("current value", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const identity = (value) => value;
    const indexMax = findIndexMax(identity);
    strictEqual(indexMax(array), array.length - 1);
  });
});
