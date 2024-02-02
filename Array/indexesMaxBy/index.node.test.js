import { it, describe } from "node:test";
import assert           from "node:assert";

import filterIndexesMax from "./index.js";

var identity               = (value) => value;
var filterIndexesMaxIdentity = filterIndexesMax(identity);

describe("array filterIndexesMax", () => {
  it("curry", () => {
    assert.strictEqual(typeof filterIndexesMaxIdentity, "function");
    assert.strictEqual(filterIndexesMaxIdentity.length, 1);
  });

  it("current value", () => {
    assert.deepEqual(filterIndexesMaxIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9]), [8]);
    assert.deepEqual(filterIndexesMaxIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [9]);
    assert.deepEqual(filterIndexesMaxIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]), [9, 10]);
    assert.deepEqual(filterIndexesMaxIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]), [9, 10, 11]);
    assert.deepEqual(filterIndexesMaxIdentity([10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]), [0, 9, 10, 11]);
  });

  it("current value by empty", () => {
    assert.deepEqual(filterIndexesMaxIdentity([]), []);
  });

  it("current value by object and any call", () => {
    var getAge              = (person) => person.age;
    var persons             = [{ age: 10 }, { age: 20 }, { age: 30 }, { age: 20 }, { age: 30 }];
    var filterIndexesByMaxAge = filterIndexesMax(getAge);
    var result              = filterIndexesByMaxAge(persons); // [2, 4];
    console.log(result);
    assert.deepStrictEqual(result, [2, 4]);
  });
});
