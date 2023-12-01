import test, { describe } from "node:test";
import assert from 'node:assert';

import lt from "./index.js";

describe("less than (lt)", () => {
  test("smaller values", () => {
    assert.strictEqual(lt(5)(2), true);
    assert.strictEqual(lt(5)(5), false);
    assert.strictEqual(lt(5)(8), false);
  });

  test("floating point numbers", () => {
    assert.strictEqual(lt(0.1)(0.05), true);
    assert.strictEqual(lt(0.1)(0.1), false);
    assert.strictEqual(lt(0.1)(0.2), false);
  });

  test("negative numbers", () => {
    assert.strictEqual(lt(-5)(-8), true);
    assert.strictEqual(lt(-5)(-5), false);
    assert.strictEqual(lt(-5)(-2), false);
  });

  test("mixed positive and negative", () => {
    assert.strictEqual(lt(-5)(5), false);
    assert.strictEqual(lt(5)(-5), true);
    assert.strictEqual(lt(-5)(-2), false);
  });
});
