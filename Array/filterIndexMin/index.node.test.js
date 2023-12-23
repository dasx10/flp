import { it, describe } from "node:test";
import assert           from "node:assert";

import filterIndexMin from "./index.js";

var identity               = (value) => value;
var filterIndexMinIdentity = filterIndexMin(identity);

describe("array filterIndexMin", () => {
  it("curry", () => {
    assert.strictEqual(typeof filterIndexMinIdentity, "function");
    assert.strictEqual(filterIndexMinIdentity.length, 1);
  });

  it("current value", () => {
    assert.deepEqual(filterIndexMinIdentity([1, 2, 3, 4, 5, 6, 7, 8, 0]), [8]);
    assert.deepEqual(filterIndexMinIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), [9]);
    assert.deepEqual(filterIndexMinIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]), [9, 10]);
    assert.deepEqual(filterIndexMinIdentity([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]), [9, 10, 11]);
    assert.deepEqual(filterIndexMinIdentity([0, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]), [0, 9, 10, 11]);
  });

  it("current value by empty", () => {
    assert.deepEqual(filterIndexMinIdentity([]), []);
  });

  it("current value by object and any call", () => {
    var getAge              = (person) => person.age;
    var persons             = [{ age: 10 }, { age: 10 }, { age: 30 }, { age: 20 }, { age: 30 }];
    var filterIndexByMinAge = filterIndexMin(getAge);
    var result              = filterIndexByMinAge(persons); // [2, 4];
    console.log(result);
    assert.deepStrictEqual(result, [0, 1]);
  });
});
