import { it, describe } from "node:test";
import assert from "node:assert";

import clump from "./index.js";

describe("clump function", () => {
  for (let minimum = 0; minimum < 10; minimum++) {
    for (let maximum = minimum + 1; maximum < 11; maximum++) {
      for (let value = 0; value < 12; value++) {
        var info = `minimum: ${minimum}, maximum: ${maximum}, value: ${value}`;
        if (value >= minimum && value <= maximum) {
          it("should return value :" + info, () => {
            assert.strictEqual(clump(value, minimum, maximum), value);
          });
        }

        else if (value < minimum) {
          it("should return min : " + info, () => {
            assert.strictEqual(clump(value, minimum, maximum), minimum);
          });
        }

        else if (value > maximum) {
          it("should return max :" + info, () => {
            assert.strictEqual(clump(value, minimum, maximum), maximum);
          });
        }
      }
    }
  }
});
