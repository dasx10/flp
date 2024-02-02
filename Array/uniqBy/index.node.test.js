import { it, describe } from "node:test";
import assert           from "node:assert";

import uniqBy from "./index.js";

const identity = (value) => value
const uniq = uniqBy(identity)

describe("array uniq", () => {
  it("curry", () => {
    assert.strictEqual(typeof uniq, "function");
    assert.strictEqual(uniq.length, 1);
  });

  it("current value primitive value", () => {
    assert.deepEqual(uniq([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(uniq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(uniq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(uniq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("current value by objects", () => {
    assert.deepEqual(uniq([{x: 1}, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 1 }]), [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }]);
  });

  it("current value by objects and any call", () => {
    const propX = (point) => point.x;
    const propY = (point) => point.y;
    const testArray = [{ x: 1, y: 3 }, { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 2 }, { x: 1, y: 2 }];
    const uniqByX = uniqBy(propX);
    assert.deepEqual(uniqByX(testArray), [{ x: 1, y: 3 },  { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 2 }]);
    const uniqByY = uniqBy(propY);
    assert.deepEqual(uniqByY(testArray), [{ x: 1, y: 3 }, { x: 1, y: 2 }, { x: 2, y: 1 }]);
  });

  it("current value by empty", () => {
    assert.deepEqual(uniq([]), []);
  });
});
