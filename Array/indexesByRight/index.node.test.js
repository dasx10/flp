import { describe, it } from "node:test";
import assert from "node:assert";

import filterIndexesRight from "./index.js";

var testNumberArray = Array.from({ length: 10 }, (_, index) => index);
var testUsersArray = ([
  { name: "John",    age: 18 },
  { name: "Jane",    age: 16 },
  { name: "Bob",     age: 20 },
  { name: "Alice",   age: 21 },
  { name: "Bill",    age: 15 },
  { name: "Barbara", age: 12 },
]);

var gt5 = (value) => (value > 5);

describe("array filter index", () => {
  it("return curry function", () => {
    var indexesGt5 = filterIndexesRight(gt5);
    assert.strictEqual(typeof indexesGt5, "function");
    assert.strictEqual(indexesGt5.length, 1);
  });

  it("current index", () => {
    var indexesGt5 = filterIndexesRight(gt5);
    assert.deepStrictEqual(indexesGt5(testNumberArray), [6, 7, 8, 9]);

    var isAgeGe18      = (user) => (user.age >= 18);
    var indexesAgeGe18 = filterIndexesRight(isAgeGe18);
    var indexesLt18    = filterIndexesRight((user) => (user.age < 18));

    assert.deepStrictEqual(indexesAgeGe18(testUsersArray), [0, 2, 3]);
    assert.deepStrictEqual(indexesLt18(testUsersArray), [1, 4, 5]);
  });
});

