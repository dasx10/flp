import { describe, it } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";

import("./Array/append.js").then((append) => describe("Array/append", () => {
  const value   = 4;
  const values  = [1, 2, 3];
  const created = append(value)(values);

  it("not mutate", () => {
    strictEqual(values, values);
  });

  it("current length", () => {
    strictEqual(created.length, values.length + 1);
  });

  it("last value must be corect", () => {
    strictEqual(created.at(-1), value);
  });

  it("values must be correct", () => {
    deepStrictEqual(created, [...values, value]);
  });
}));
