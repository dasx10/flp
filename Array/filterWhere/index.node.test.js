import { describe, it } from "node:test";
import { strictEqual, deepStrictEqual } from "node:assert";

import filterWhere from "./index.js";

const testArray = [
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
]

describe("array filterWhere", () => {
  it("current value", () => {
    const test = filterWhere({
      age  : (age)  => age > 20,
      name : (name) => name.length > 3
    });

    const data = test(testArray)

    strictEqual(data.length, 2)
    deepStrictEqual(data[0], { ...testArray[1] })
    deepStrictEqual(data[1], { ...testArray[3] })
  });
});
