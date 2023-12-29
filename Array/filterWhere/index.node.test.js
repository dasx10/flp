import { describe, it } from "node:test";
import assert from "node:assert";

import filterWhere from "./index.js";

const testArray = ([
  {
    name     : "John",
    lastName : "Doe",
    age      : 20
  },
  {
    name     : "Arnold",
    lastName : "Schwarzenegger",
    age      : 50,
  },
  {
    name     : "Peter",
    lastName : "Parker",
    age      : 18
  },
  {
    name     : "Tony",
    lastName : "Stark",
    age      : 40
  },
  {
    name     : "mr.",
    lastName : "Bin",
    age      : 30
  },
]);

describe("array filterWhere", () => {
  it("curry", () => {
    const test = filterWhere({
      age  : (age)  => age > 20,
      name : (name) => name.length > 3
    });

    assert.strictEqual(typeof test, "function");
    assert.strictEqual(test.length, 1);
  })

  it("current value", () => {
    const test = filterWhere({
      age  : (age)  => age > 20,
      name : (name) => name.length > 3
    });

    const data = test(testArray)

    assert.strictEqual(data.length, 2)
    assert.deepStrictEqual(data[0], { ...testArray[1] })
    assert.deepStrictEqual(data[1], { ...testArray[3] })
  });
});
