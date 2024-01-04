import { it, describe } from "node:test";
import assert from 'node:assert';

import trap from "./index.js";

const timeout = (value) => new Promise((resolve) => setTimeout(resolve, value, value));

describe("trap", () => {
  it("curry", () => {
    assert.strictEqual(typeof trap(Date.now), "function");
    assert.strictEqual(trap(Date.now).length, 1);
  });

  it("return always Promise", async () => {
    const trapDate = trap(Date.now);
    const resultTrapDate = trapDate(Date.now());
    assert.strictEqual(resultTrapDate.constructor === Promise, true);

    const trapNext = trap(() => resultTrapDate);
    const trapNextDate = trapNext();
    assert.strictEqual(trapNextDate.constructor === Promise, true);

    const [date, nextDate] = await Promise.all([resultTrapDate, trapNextDate]);
    assert.strictEqual(date, nextDate);

    const nextNull = trap(() => null);
    const nextNullDate = nextNull();
    assert.strictEqual(nextNullDate.constructor === Promise, true);
    const maybeNull = await nextNullDate;
    assert.strictEqual(maybeNull, null);
  });

  it("current value if return Promise", () => {
    const trapTimeout = trap(timeout);
    const wait1 = trapTimeout(4);
    assert.strictEqual(wait1, trapTimeout(4));
    const wait3 = trapTimeout(2000);
    assert.notStrictEqual(wait1, wait3);

    wait1.then(() => {
      assert.notStrictEqual(wait1, trapTimeout(4));
      assert.strictEqual(wait3, trapTimeout(2000));
    });
  });

  it("current value if not return Promise new promise", async () => {
    const trapDate = trap(Date.now);
    const date1    = trapDate();
    const date2    = trapDate();
    assert.strictEqual(date1, date2);
    await timeout(4);
    const date3 = trapDate();
    assert.notStrictEqual(date1, date3);

    await Promise.all([date1, date2, date3]);
  });

  it("test use side effect", async () => {
    let counter = 0;
    const increment = () => ++counter;
    const trapIncrement = trap(increment);
    const waitInc = trapIncrement();
    assert.strictEqual(counter, 1);
    await waitInc;
    assert.strictEqual(counter, 1);

    const waitInc1 = trapIncrement();
    const waitInc2 = trapIncrement();
    assert.strictEqual(counter, 2);

    await Promise.all([waitInc1, waitInc2]);
    assert.strictEqual(counter, 2);
  });
});
