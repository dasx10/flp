import { it, describe } from "node:test";
import assert           from "node:assert";

import filterIndexesMin from "./index.js";

var identity               = (value) => value;
var filterIndexesMinIdentity = filterIndexesMin(identity);

describe("array filterIndexesMin", () => {
  it("curry", () => {
    assert.strictEqual(typeof filterIndexesMinIdentity, "function");
    assert.strictEqual(filterIndexesMinIdentity.length, 1);
  });

  it("current value", () => {
    assert.deepEqual(filterIndexesMinIdentity([1, 2, 3, 4, 5, 6, 7, 8, 0]), [8]);
    assert.deepEqual(filterIndexesMinIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), [9]);
    assert.deepEqual(filterIndexesMinIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]), [9, 10]);
    assert.deepEqual(filterIndexesMinIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]), [9, 10, 11]);
    assert.deepEqual(filterIndexesMinIdentity([0, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]), [0, 9, 10, 11]);
  });

  it("current value by empty", () => {
    assert.deepEqual(filterIndexesMinIdentity([]), []);
  });

  it("current value by object and any call", () => {
    var getAge              = (person) => person.age;
    var persons             = [{ age: 10 }, { age: 10 }, { age: 30 }, { age: 20 }, { age: 30 }];
    var filterIndexesByMinAge = filterIndexesMin(getAge);
    var result              = filterIndexesByMinAge(persons); // [2, 4];
    console.log(result);
    assert.deepStrictEqual(result, [0, 1]);
  });
});
