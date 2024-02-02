/**
  * @summary Filter by equality
  * @description Filter by equality, return new filtered array.
  * @function
  * @name filterWhereEq
  * @param {Record<PropertyKey, any>} test
  * @returns {Function}
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
  * filterWhereEq({
  *   age  : 20,
  *   name : "a",
  * })(users); // [{ name: "a", age: 20 }];
  *
  * filterWhereEq({
  *   age  : 20,
  *   name : "b",
  * })(users); // [{ name: "b", age: 20 }];
  *
  * filterWhereEq({
  *   age  : 30,
  *   name : "b",
  * })(users); // [{ name: "b", age: 30 }];
  *
  * filterWhereEq({
  *   age: 20,
  * })(users); // [{ name: "a", age: 20 }, { name: "b", age: 20 }];
  *
  * filterWhereEq({
  *   name: "a",
  * })(users); // [{ name: "a", age: 10 }, { name: "a", age: 20 }];
  *
  * const newUsers = [
  *   { age: 10, name: "a", tags: ["a", "b"] },
  *   { age: 20, name: "a", tags: ["a", "c"] },
  *   { age: 20, name: "b", tags: ["a", "b"] },
  * ];
  *
  * filterWhereEq({
  *   tags: ["a"],
  * })(newUsers); // [];
  *
  * filterWhereEq({
  *   tags: ["a", "b"],
  * })(newUsers); // [{ age: 10, name: "a", tags: ["a", "b"] }, { age: 20, name: "b", tags: ["a", "b"] }];
  * ```
  */
export default function filterWhereEq<Test extends Record<PropertyKey, any>>(test: Test)
  : <Values extends readonly Record<PropertyKey, any>>(values: Values) => [] | Values | Values[number][];
