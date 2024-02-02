import type Index       from "../types";
import type IterateCall from "../types/IterateCall";

/**
  * @function
  * @name indexesBy
  * @alias filterIndexesBy
  * @description Creates an array of indexes by a given call.
  * @example
  * ```
  * const indexesUserAgeGt18 = indexesBy(user => user.age > 18);
  * const users = [{ age: 17 }, { age: 18 }, { age: 19 }, { age: 20 }];
  * indexesUserAgeGt18(users); // [2, 3];
  *
  * const indexesUserAgeGe18 = indexesBy(user => user.age >= 18);
  * indexesUserAgeGe18(users); // [1, 2, 3];
  * ```
  */
export default function indexesBy<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => Index<Values>[];
