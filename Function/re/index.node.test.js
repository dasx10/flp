import { it, describe } from "node:test";
import assert from 'node:assert';

import re from "./index.js";

var add = (a, b) => a + b;

describe("re", () => {
  it("return always remember function if created before", () => {
    var add1 = re(add);
    var add2 = re(add);
    assert.strictEqual(add1, add2);
  });

  it("return always remember function if new", () => {
    var add1 = re((a, b) => a + b);
    var add2 = re((a, b) => a + b);

    assert.strictEqual(add1, add2);
  });

  it("return always remember function if new is eq before", () => {
    var add1 = re((a, b) => a + b);
    assert.strictEqual(add1, add);
  });
});
