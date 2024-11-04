import type ArrayIndex from "../types/Array/Index.d.ts";

/**
  * @example
  * ```javascript
  * lastIndexMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 9
  * lastIndexMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) // 10
  * lastIndexMax([1, 2, 3, 4, 5, 6, 70, 8, 9, 10]) // 6
  * lastIndexMax([1, 2, 3, 4, 5, 6, 10, 8, 9, 10]) // 9
  * lastIndexMax([]) // -1
  * ```
  * @description Returns the index of the last element that maximizes value
  * @function
  * @name lastIndexMax
  * @param {readonly number[]} values
  * @returns {number}
  */
export default function lastIndexMax<Values extends readonly number[]>(values: Values): ArrayIndex<Values>;
