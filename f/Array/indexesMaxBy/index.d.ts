import type Index from "../types";
import type IterateCall from "../types/IterateCall";

/**
  * @function
  * @name indexesMaxBy
  * @alias filterIndexesMax
  * @description Returns an array of indices of the largest elements in the result
  * @param {Function} call - Function to call for each element of the array.
  * @returns {Function} - `(Array<any>) => Array<number>`
  * @example
  * ```
  * var numbers = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  * var indexesMax = indexesMaxBy(identity);
  * var result = indexesMax(numbers); // [0, 11];
  * ```
  */
export default function indexesMaxBy<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => Index<Values>[];
