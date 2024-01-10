/**
  * less than
  */
export type LT <Value extends number, Next extends number> = boolean;

/**
  * `Logic`
  * less than
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * _lt(1, 2); // false
  * _lt(2, 1); // true
  * _lt(1, 1); // false
  * _lt(2, 2); // false
  */
export default function _lt <
  Value extends number,
  Next  extends number,
>(value: Value, next: Next): LT<Value, Next>;
