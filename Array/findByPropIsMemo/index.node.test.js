import { it, describe } from "node:test";
import assert from 'node:assert';

import findByPropIsMemo from "./index.js";

/** @returns {number} */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const testArray = Array.from({ length: 65534 }, (_, i) => ({ x: i + 1, y: random(i, 65535) }));

describe("array findByPropIsMemo", () => {
  it("curry", () => {
    assert.strictEqual(typeof findByPropIsMemo("x"), "function");
    assert.strictEqual(findByPropIsMemo("x").length, 1);
  });

  // it("returned memoized function", () => {
    //   assert.strictEqual(findByPropIsMemo("x"), findByPropIsMemo("x"));
    // });

  const iterations = 60000;

  it("current value", () => {
    const findByX = findByPropIsMemo("x");
    for (let index = iterations; index > 0; index--) {
      const result = findByX(index)(testArray);
      assert.strictEqual(result, testArray[index - 1]);
    }
  });

  it("performance", () => {
    const startTimeFind = performance.now();
    var result = 0;
    for (let index = iterations; index > 0; index--) {
      result += testArray.find(({ x }) => x === index).x;
    }
    const endTimeFind = performance.now();

    const startTimeFindMemo = performance.now();
    const findByX = findByPropIsMemo("x");
    for (let index = iterations; index > 0; index--) {
      result += findByX(index)(testArray).x;
    }
    const endTimeFindMemo = performance.now();

    const timeFind               = (endTimeFind - startTimeFind);
    const timeFindMemo           = (endTimeFindMemo - startTimeFindMemo);
    const timeDifference         = (timeFind) - (timeFindMemo);
    const timeDifferencePercents = (timeDifference / timeFind) * 100;
    const timeDivide             = (timeFind / timeFindMemo);

    assert.strictEqual(timeFind > timeFindMemo, true);
    console.log(
      "+--------------------------------------------------+" + "\n" +
      "|benchmark Array.prototype.find vs findByPropIsMemo|" + "\n" +
      "+--------------------------------------------------+" + "\n" +
      "|find                : " + timeFind + "ms" + "\n" +
      "|findByPropIsMemo    : " + timeFindMemo + "ms" + "\n" +
      "|difference          : " + timeDifference + "ms" + "\n" +
      "|difference percents : " + timeDifferencePercents + "%" + "\n" +
      "|faster              : " + timeDivide + "\n" +
      "+--------------------------------------------------+" + "\n"
    );

  });
});
