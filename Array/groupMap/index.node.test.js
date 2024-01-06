import { it, describe } from "node:test";
import assert from 'node:assert';

import groupMap from "./index.js";

const prop = (key) => (value) => value[key];
const byX = prop("x");

describe("array group map", () => {
  it("return curry", () => {
    assert.strictEqual(typeof groupMap(byX), "function");
    assert.strictEqual(groupMap(byX).length, 1);
  });

  it("return current value", () => {
    const test = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 1, y: 1 }];
    const result = groupMap(byX)(test);

    const x1 = result.get(1);
    assert.deepStrictEqual(Array.from(x1), [{ x: 1, y: 2 }, { x: 1, y: 1 }]);

    const x2 = result.get(2);
    assert.deepStrictEqual(Array.from(x2), [{ x: 2, y: 2 }]);

    const x3 = result.get(3);
    assert.deepStrictEqual(Array.from(x3), [{ x: 3, y: 1 }]);
  });
});
