import type Index from "../types";
import type IterateCall from "../types/IterateCall";

/**
  * @function
  * @name indexesMinByRight
  * @alias filterIndexesMinRight
  * @description Returns an array of indices of the smallest elements in the result
  * @param {Function} call - Function to call for each element of the array.
  * @returns {Function} - `(Array<any>) => Array<number>`
  * @example
  * ```
  * var identity = (value) => value;
  * var indexesMin = indexesMinByRight(identity);
  * indexesMin([1, 2, 3, 4, 5]); // [0];
  * indexesMin([1, 2, 3, 4, 1]); // [0, 4];
  * indexesMin([1, 2, 3, 4, 1, 1]); // [0, 4, 5];
  * indexesMin([]); // [];
  *
  * var indexesMinAbs = indexesMinByRight(Math.abs);
  * indexesMinAbs([-1, -2, -3, -4, -5]); // [0];
  * indexesMinAbs([-1, -2, -3, -4, -1]); // [0, 4];
  * indexesMinAbs([-1, -2, -3, -4, -1, -1]); // [0, 4, 5];
  * indexesMinAbs([-1, -2, -3, -4, 1, -1]); // [0, 4, 5];
  * indexesMinAbs([-1, -2, -3, -4, 1, 1]); // [0, 4, 5];
  * indexesMinAbs([-1, -2, -3, -4, -1, 1]); // [0, 4, 5];
  * indexesMinAbs([1, -2, -3, -4, -1, 1]); // [0, 4, 5];
  * indexesMinAbs([]); // [];
  * ```
  */
export default function indexesMinByRight<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => Index<Values>[];
