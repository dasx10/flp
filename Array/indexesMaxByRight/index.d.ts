import type Index from "../types";
import type IterateCall from "../types/IterateCall";

/**
  * @function
  * @name indexesMaxByRight
  * @alias filterIndexesMaxRight
  * @description Returns an array of indices of the largest elements in the result
  * @param {Function} call - Function to call for each element of the array.
  * @returns {Function} - `(Array<any>) => Array<number>`
  * @example
  * ```
  * var identity = (value) => value;
  * var indexesMax = indexesMaxByRight(identity);
  * indexesMax([1, 2, 3, 4, 5]); // [4];
  * indexesMax([1, 2, 3, 4, 5, 5]); // [4, 5];
  * indexesMax([5, 2, 3, 4, 5, 5]); // [0, 4, 5];
  * indexesMax([]); // [];
  * var indexesMaxAbs = indexesMaxByRight(Math.abs);
  * indexesMaxAbs([-1, -2, -3, -4, -5]); // [4];
  * indexesMaxAbs([-1, -2, -3, -4, -5, -5]); // [4, 5];
  * indexesMaxAbs([-1, -2, -3, -4, 5, -5]); // [4, 5];
  * indexesMaxAbs([-1, -2, -3, -4, -5, 5]); // [4, 5];
  * indexesMaxAbs([-5, -2, -3, -4, 5, 5]); // [0, 4, 5];
  * indexesMaxAbs([]); // [];
  * ```
  */
export default function indexesMaxByRight<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => Index<Values>[];
