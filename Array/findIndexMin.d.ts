import type ArrayIndex from "../Types/ArrayIndex";

/**
  * @example
  * ```javascript
  * findIndexMin(x => x)([1, 2, 3]); // 0
  * findIndexMin(x => x)([]); // -1
  * findIndexMin(x => x)([1, 2, 3, 1]) // 0
  * findIndexMin(x => x)([2, 3, 1]) // 2
  * ```
  * @description Find the index of the minimum value
  * @param {function} call
  * @returns {function}
  * @function
  * @name findIndexMin
  */
export default function findIndexMin<Value>(call: (value: Value) => number): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values> | -1;
export const then: (result: (value: typeof findIndexMin) => any) => any;
