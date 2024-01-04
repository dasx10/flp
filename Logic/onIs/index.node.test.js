import { it, describe } from "node:test";
import assert from 'node:assert';

import onIs from "./index.js";

const is = onIs((call) => call);
const is1 = is(1);

describe("onIs", () => {
  it("curry", () => {
    assert.strictEqual(typeof is, "function");
    assert.strictEqual(is.length, 1);
    assert.strictEqual(typeof is1, "function");
    assert.strictEqual(is1.length, 1);
  });

  it("current value true", () => {
    assert.strictEqual(is1(1), true);
  });

  it("current value false", () => {
    assert.strictEqual(is1(2), false);
  });
});
