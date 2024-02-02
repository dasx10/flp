import type { FindIndex } from "../findIndex";
import type Index from "../types";
import type IterateCall from "../types/IterateCall";

import type findLastIndexMin from "../findLastIndexMin";
import type findIndexMax     from "../findIndexMax";
import type filterIndexesMin   from "../filterIndexesMin";

/**
  * @function
  * @name findIndexMin
  * @description Returns the index of the smallest element in the result
  * @param {Function} call - Function to call for each element of the array.
  * @returns {Function} - `(Array<any>) => number`
  * @example
  * ```
  * var findMinIndexIdentity = findIndexMin(identity);
  * findMinIndexIdentity([1, 2, 3, 4, 5]); // 0;
  * findMinIndexIdentity([5, 4, 3, 2, 1]); // 4;
  * findMinIndexIdentity([5, 4, 3, 2, 1, 1]); // 4;
  * findMinIndexIdentity([]); // -1;
  * ```
  *
  * @see {@link findLastIndexMin}
  * @see {@link findIndexMax}
  * @see {@link filterIndexesMin}
  */
export default function findIndexMin<Value, Values extends readonly Value[]>(call: IterateCall<any, Value, Values>): (values: Values) => FindIndex<Values>;
export default function findIndexMin<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => FindIndex<Values>;
