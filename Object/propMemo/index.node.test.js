import { it, describe } from "node:test";
import assert from 'node:assert';

import propMemo from "./index.js";

describe("object propMemo", () => {
  it("curry", () => {
    assert.strictEqual(typeof propMemo("x"), "function");
    assert.strictEqual(propMemo("x").length, 1);
  });

  it("return memoized function", () => {
    const propX  = propMemo("x");
    for (let i = 0; i < 10; i++) {
      const propN1 = propMemo(i);
      const propN2 = propMemo(i);
      assert.strictEqual(propN1, propN2);
      const propX2 = propMemo("x");
      assert.strictEqual(propX, propX2);
      assert.notStrictEqual(propX, propN1);
    }
  });

  it("current value", () => {
    const obj = { x: 1, y: 2 };

    const propX = propMemo("x");
    assert.strictEqual(propX(obj), 1);
  });

  it("return memoized value", () => {
    const incedXObject = ({
      _x: 1,
      get x() {
        return this._x++;
      }
    });

    const propX = propMemo("x");
    assert.strictEqual(propX(incedXObject), 1);
    assert.strictEqual(propX(incedXObject), 1);

    assert.strictEqual(incedXObject.x, 2);
    assert.strictEqual(propX(incedXObject), 1);

    assert.strictEqual(incedXObject.x, 3);
    assert.strictEqual(propX(incedXObject), 1);
    assert.strictEqual(propMemo("x")(incedXObject), 1);
  });

});
