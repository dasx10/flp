import type ArrayIndex from "../Types/ArrayIndex";

/**
  * @example
  * ```javascript
  * findIndexMax((value) => value)([1, 2, 3]); // 2
  * findIndexMax((value) => value)([]); // -1
  * findIndexMax((value) => value)([1, 4, 3]); // 1
  * findIndexMax(Math.abs)([-1, -2, -3, -4]); // 3
  * findIndexMax(Math.abs)([-1, -2, -3, -4, 1, -2]); // 3
  * ```
  * @description Find the index of the maximum value in an array
  * @param {function} call
  * @returns {function}
  * @function
  * @name findIndexMax
  */
export default function findIndexMax<Value>(call: (value: Value) => number): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values> | -1;
export var then: (resolve: (value: typeof findIndexMax) => any) => any;
