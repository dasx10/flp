import { it, describe } from "node:test";
import assert           from "node:assert";

import filterWhereIs from "./index.js";

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
    age      : 20,
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

describe("array filter where is", () => {
  it("curry", () => {
    assert.strictEqual(typeof filterWhereIs({ age: 40 }), "function");
    assert.strictEqual(filterWhereIs({ age: 40 }).length, 1);
  });

  it("current value", () => {
    const filterWhereAge20 = filterWhereIs({ age: 20 });
    const data = filterWhereAge20(testArray);
    assert.strictEqual(data.length, 2);
    assert.deepStrictEqual(data[0], testArray[0]);
    assert.deepStrictEqual(data[1], testArray[2]);
  });
});
