import { it, describe } from "node:test";
import assert           from "node:assert";

import empty from "./index.js";

describe("array empty", () => {
  it("is empty", () => {
    assert.deepStrictEqual(empty(), []);
  });

  it("is identical", () => {
    assert.strictEqual(empty(), empty());
  });

  it("readonly", () => {
    const a = empty();
    try {
      a.push(1);
    } catch (error) {}

    try {
      a[1] = 1;
    } catch (error) {}

    try {
      a.length = 3;
    } catch (error) {}

    assert.deepStrictEqual(a, []);
    assert.strictEqual(a.length, 0);
    assert.strictEqual(a[0], undefined);
    assert.strictEqual(a[1], undefined);
    assert.strictEqual(a[2], undefined);
    assert.strictEqual(empty(), a);
  });

  it("no side effect", () => {
    const a = empty();
    try {
      a.push(1);
    } catch (error) {}

    try {
      a[1] = 1;
    } catch (error) {}

    try {
      a.length = 3;
    } catch (error) {}

    assert.deepStrictEqual(empty(), []);
    assert.deepStrictEqual(empty().length, 0);
    assert.deepStrictEqual(empty()[0], undefined);
  });
});
