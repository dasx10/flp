import { it, describe } from "node:test";
import assert from "node:assert";

import lt0 from "./index.js";

describe("lt0", () => {
  it("current length", () => {
    assert.strictEqual(lt0.length, 1);
  });

  it("current value NaN", () => {
    assert.strictEqual(lt0(NaN), false);
  });

  it("current value 0", () => {
    assert.strictEqual(lt0(0), false);
  });

  it("current value > 0", () => {
    for (var index = 1; index < 100; index++) {
      assert.strictEqual(lt0(index), false);
    }
  });

  it("current value < 0", () => {
    for (var index = 1; index < 100; index++) {
      assert.strictEqual(lt0(-index), true);
    }
  });
});
