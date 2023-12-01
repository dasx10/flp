import { it, describe } from "node:test";
import assert from "node:assert";

import clump from "./index.js";

describe("clump function", () => {
  it("should return value :", () => {
    for (let minimum = 0; minimum < 10; minimum++) {
      for (let maximum = minimum + 1; maximum < 11; maximum++) {
        for (let value = 0; value < 12; value++) {
          if (value >= minimum && value <= maximum) {
            assert.strictEqual(clump(value, minimum, maximum), value);
          }
        }
      }
    }
  });

  it("should return min : ", () => {
    for (let minimum = 0; minimum < 10; minimum++) {
      for (let maximum = minimum + 1; maximum < 11; maximum++) {
        for (let value = 0; value < 12; value++) {
          if (value < minimum) {
            assert.strictEqual(clump(value, minimum, maximum), minimum);
          }
        }
      }
    }
  });

  it("should return max :", () => {
    for (let minimum = 0; minimum < 10; minimum++) {
      for (let maximum = minimum + 1; maximum < 11; maximum++) {
        for (let value = 0; value < 12; value++) {
          if (value > maximum) {
            assert.strictEqual(clump(value, minimum, maximum), maximum);
          }
        }
      }
    }
  });
});
