/** greater than */
export type GT<Value extends number, Next extends number> = boolean;

/**
  * `Logic`
  * greater than
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * ```
  * gt(1, 2); // false
  * gt(2, 1); // true
  * gt(1, 1); // false
  * gt(2, 2); // false
  * ```
  */
export default function gt<Value extends number, Next extends number>(value: Value, next: Next): GT<Value, Next>;
