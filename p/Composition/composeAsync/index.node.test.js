import { it, describe } from "node:test";
import assert from "node:assert";

import composeAsync from "./index.js";

var add = (y) => (x) => x + y;
var addOneAsync = (value) => Promise.resolve(value).then(add(1));
var delay = (time) => (value) => new Promise((resolve) => setTimeout(resolve, time, value));

describe("pipeAsync", () => {
  it("current all sync value", () => {
    composeAsync(3, [add(1), add(2)]).then((value) => assert.strictEqual(value, 6));
  });

  it("current value async functions sync", () => {
    composeAsync(delay(10)(3), [add(1), add(2)]).then((value) => assert.strictEqual(value, 6));
  });

  it("current value async functions async", () => {
    composeAsync(delay(10)(3), [addOneAsync, addOneAsync]).then((value) => assert.strictEqual(value, 5));
  });

  it("current all async", () => {
    composeAsync(delay(10)(3), delay(20)([add(1), addOneAsync, addOneAsync])).then((value) => assert.strictEqual(value, 6));
    composeAsync(delay(10)(3), delay(20)([String, add(1), addOneAsync, addOneAsync])).then((value) => assert.strictEqual(value, "6"));
  });
});
