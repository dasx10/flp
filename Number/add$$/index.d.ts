/**
  * @summary add numbers
  * @function `(x, y) => x + y`
  * @name _add
  * @alias addition
  * @description add two numbers, if any of them is NaN, return NaN
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * ```
  * add(0, 0); // 0
  * add(0, 1); // 1
  * add(1, 0); // 1
  * add(1, 2); // 3
  * add(2, 1); // 3
  * add(1, 1); // 2
  * add(2, 2); // 4
  * add(NaN, 1); // NaN
  * add(1, NaN); // NaN
  * ```
  */
export default function add$$(value: number, next: number): number;
