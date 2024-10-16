import type ArrayIndexOf from "../types/Array/IndexOf.d.ts";
import type ArrayIndex   from "../types/Array/Index.d.ts";

/**
  * @example
  * ```
  * findIndex(x => x > 2)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 2
  * findIndex(x => x === 0)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // -1
  * ```
  * @description Returns the index of the first element that satisfies the predicate
  * @function
  * @name findIndex
  * @param {function}
  * @returns {function}
  */
export default function findIndex<Is, Value>(call: (value: Value) => value is Is): <Values extends readonly Value[]>(values: Values) => ArrayIndexOf<Values, Is>;
export default function findIndex<Value>(call: (value: Value) => boolean): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values> | -1;

export var then: (resolve: (value: typeof findIndex) => any) => any;
