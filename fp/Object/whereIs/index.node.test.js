import { it, describe } from "node:test";
import assert from "node:assert";

import whereIs from "./index.js";

const whereXIs0 = whereIs({
  x: 0,
});

const whereXIs1 = whereIs({
  x: 1,
});


const whereXIsM1 = whereIs({
  x: -1,
});

const whereXIs1yM1 = whereIs({
  x: 1,
  y: -1,
});

describe("is", () => {
  it("returns a curry", () => {
    [whereXIs0, whereXIs1, whereXIsM1, whereXIs1yM1].forEach((fn) => {
      assert.strictEqual(typeof fn, "function");
      assert.strictEqual(fn.length, 1);
    });
  });

  it("current value", () => {
    const depth = 3000;
    for (let index = -depth; index < depth; index++) {
      assert.strictEqual(whereXIs0({ x: index }), index === 0);
      assert.strictEqual(whereXIs1({ x: index }), index === 1);
      assert.strictEqual(whereXIsM1({ x: index }), index === -1);

      for (let index2 = -depth; index2 < depth; index2++) {
        assert.strictEqual(whereXIs1yM1({ x: index, y: index2 }), index === 1 && index2 === -1);
      }
    }
  })
});
