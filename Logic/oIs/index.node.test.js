import { it, describe } from "node:test";
import assert from 'node:assert';

import oIs from "./index.js";

const prop = (key) => (value) => value[key];

describe("logic oIs", () => {
  it("curry", () => {
    assert.strictEqual(typeof oIs(prop("x")), "function");
    assert.strictEqual(oIs(prop("x")).length, 1);

    assert.strictEqual(typeof oIs(prop("x"))({ x: 1 }), "function");
    assert.strictEqual(oIs(prop("x"))({ x: 1 }).length, 1);
  });

  it("current value true", () => {
    assert.strictEqual(oIs(prop("x"))({ x: 1 })(1), true);
  });

  it("current value false", () => {
    assert.strictEqual(oIs(prop("x"))({ x: 1 })(2), false);
  });
});
