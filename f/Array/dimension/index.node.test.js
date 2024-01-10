import { it, describe } from "node:test";
import assert           from "node:assert";

import dimension from "./index.js";

const values = [1, 2, 3, 4];

describe("array dimension", () => {
  it("curry", () => {
    assert.strictEqual(typeof dimension([1, 2, 3]), "function");
    assert.strictEqual(dimension([1, 2, 3]).length, 1);
  });

  it("current value no change", () => {
    assert.strictEqual(dimension(values)(values), values);
    assert.strictEqual(dimension([...values])(values), values);
  });

  it("current value change", () => {
    const newValues = values.filter((x) => x > 1);
    const newAddValues = values.concat(1);
    assert.strictEqual(dimension(newValues)(values), newValues);
    assert.strictEqual(dimension(newAddValues)(values), newAddValues);
  });
});
