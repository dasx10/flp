import { it, describe } from "node:test";
import assert           from "node:assert";

import every from "./index.js";

const gt5 = x => x > 5;
const lt5 = x => x < 5;
const everyGt5 = every(gt5);
const everyLt5 = every(lt5);

describe("array everyRight", () => {
  it("curry", () => {
    assert.strictEqual(typeof everyGt5, "function");
    assert.strictEqual(everyGt5.length, 1);
    assert.strictEqual(typeof everyLt5, "function");
    assert.strictEqual(everyLt5.length, 1);
  });

  it("current value false", () => {
    assert.deepStrictEqual(everyGt5([1, 2, 3, 4, 5, 6, 7, 8, 9]), false);
    assert.deepStrictEqual(everyLt5([1, 2, 3, 4, 5, 6, 7, 8, 9]), false);
    assert.deepStrictEqual(everyLt5([6, 7, 8, 9]), false);
    assert.deepStrictEqual(everyGt5([1, 2, 3, 4]), false);
  });

  it("current value true", () => {
    assert.deepStrictEqual(everyGt5([6, 7, 8, 9]), true);
    assert.deepStrictEqual(everyLt5([1, 2, 3, 4]), true);
  });

  it("current value empty", () => {
    assert.deepStrictEqual(everyGt5([]), true);
    assert.deepStrictEqual(everyLt5([]), true);
  });
});
