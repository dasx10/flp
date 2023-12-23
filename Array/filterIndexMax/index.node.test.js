import { it, describe } from "node:test";
import assert           from "node:assert";

import filterIndexMax from "./index.js";

var identity               = (value) => value;
var filterIndexMaxIdentity = filterIndexMax(identity);

describe("array filterIndexMax", () => {
  it("curry", () => {
    assert.strictEqual(typeof filterIndexMaxIdentity, "function");
    assert.strictEqual(filterIndexMaxIdentity.length, 1);
  });

  it("current value", () => {
    assert.deepEqual(filterIndexMaxIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9]), [8]);
    assert.deepEqual(filterIndexMaxIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [9]);
    assert.deepEqual(filterIndexMaxIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]), [9, 10]);
    assert.deepEqual(filterIndexMaxIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]), [9, 10, 11]);
    assert.deepEqual(filterIndexMaxIdentity([10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]), [0, 9, 10, 11]);
  });

  it("current value by empty", () => {
    assert.deepEqual(filterIndexMaxIdentity([]), []);
  });

  it("current value by object and any call", () => {
    var getAge              = (person) => person.age;
    var persons             = [{ age: 10 }, { age: 20 }, { age: 30 }, { age: 20 }, { age: 30 }];
    var filterIndexByMaxAge = filterIndexMax(getAge);
    var result              = filterIndexByMaxAge(persons); // [2, 4];
    console.log(result);
    assert.deepStrictEqual(result, [2, 4]);
  });
});
