import type Index from "../types";

/**
  * @function
  * @name countWhereIs
  * @description Counts the number of values that satisfy the condition.
  * @example
  * ```
  * var testArray = [{ name: "John" }, { name: "John" }, { name: "Susan" }, { name: "Alyx" }, { name: "Noname" }];
  * countWhereIs({ name: "John" })(testArray); // 2;
  * countWhereIs({ name: "Noname" })(testArray); // 1;
  * countWhereIs({ name: "Susan" })(testArray); // 1;
  * countWhereIs({ name: "Alyx" })(testArray); // 1;
  * countWhereIs({ name: "Jane" })(testArray); // 0;
  * ```
  */
export default function countWhereIs<Test extends Record<PropertyKey, any>>(test: Test): <Values extends readonly any[]>(values: Values) => Index<Values>;
