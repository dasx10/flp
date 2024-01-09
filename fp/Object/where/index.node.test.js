import { it, describe } from "node:test";
import assert from "node:assert";

import where from "./index.js";

const gt = (next) => (value) => value > next;
const lt = (next) => (value) => value < next;
const eq = (next) => (value) => value === next;
const ne = (next) => (value) => value !== next;

const whereXGt0 = where({
  x: gt(0),
});

const whereXGt0YLt0 = where({
  y: lt(0),
  x: gt(0),
});

const whereX0 = where({
  x: eq(0),
});

const whereYne0 = where({
  y: ne(0),
});

describe("is", () => {
  it("returns a curry", () => {
    [whereXGt0, whereXGt0YLt0, whereX0, whereYne0].forEach((fn) => {
      assert.strictEqual(typeof fn, "function");
      assert.strictEqual(fn.length, 1);
    });
  });

  it("current value", () => {
    const depth = 3000;
    for (let index = -depth; index < depth; index++) {
      assert.strictEqual(whereXGt0({ x: index }), index > 0);
      assert.strictEqual(whereYne0({ y: index }), index !== 0);
      assert.strictEqual(whereX0({ x: index }), index === 0);

      for (let index2 = -depth; index2 < depth; index2++) {
        assert.strictEqual(whereXGt0YLt0({ x: index, y: index2 }), index > 0 && index2 < 0);
        assert.strictEqual(whereXGt0YLt0({ x: index2, y: index }), index2 > 0 && index < 0);
      }
    }
  });
});
