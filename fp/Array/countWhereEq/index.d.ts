import type Index from "../types";

/**
  * @function
  * @name countWhereEq
  * @description Counts the number of values that satisfy the condition.
  * @example
  * ```
  * var testArray = [{ name: "John" }, { name: "John" }, { name: "Susan" }, { name: "Alyx" }, { name: "Noname" }];
  * countWhereEq({ name: "John" })(testArray); // 2;
  * countWhereEq({ name: "Noname" })(testArray); // 1;
  * countWhereEq({ name: "Susan" })(testArray); // 1;
  * countWhereEq({ name: "Alyx" })(testArray); // 1;
  * countWhereEq({ name: "Jane" })(testArray); // 0;
  *
  * const testArray2 = [{spec: {a:1, b:2}}, {spec: {a:1, b:2}}, {spec: {a:1, b:3}}];
  * countWhereEq({spec: {a:1, b:2}})(testArray2); // 2;
  * countWhereEq({spec: {a:1, b:3}})(testArray2); // 1;
  * countWhereEq({spec: {a:1, b:4}})(testArray2); // 0;
  * ```
  */
export default function countWhereEq<Test extends Record<PropertyKey, any>>(test: Test): <Values extends readonly any[]>(values: Values) => Index<Values>;
