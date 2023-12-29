import type Lambda from "../../types/Lambda";

/**
  * @description Creates an array of values that satisfy the condition.
  * @function
  * @name filterWhere
  * @param {object} test - Record with keys as property names and values as Lambda.
  * @returns {Function} - `(value: Array) => Array`
  * @example
  * ```
  * const users = [
  *   { name: "a", age: 10 },
  *   { name: "a", age: 20 },
  *   { name: "b", age: 20 },
  *   { name: "b", age: 30 },
  *   { name: "c", age: 30 }
  * ];
  *
  * filterWhere({
  *   age  : (age)  => age > 10,
  *   name : (name) => name === "a",
  * })(users); // [{ name: "a", age: 20 }];
  *
  * filterWhere({
  *   age  : (age)  => age < 30,
  *   name : (name) => name === "b" || name === "c",
  * })(users); // [{ name: "b", age: 20 }];
  *
  * filterWhere({
  *   age  : (age)  => age > 20,
  *   name : (name) => name === "b" || name === "c",
  * })(users); // [{ name: "b", age: 30 }, { name: "c", age: 30 }];
  * ```
  */
export default function filterWhere<Test extends Record<PropertyKey, Lambda<any, any>>>(test: Test)
  : <Values extends readonly Record<PropertyKey, any>[]>(values: Values) => Values | Values[number][] | [];
