/**
  * addition
  * `z = (x + y)`
  */
export type Add<Value extends number, Next extends number> = number;

/**
  * `Monoid` `Math`
  * addition
  * `z = (x + y)`
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * _add(1, 2); // 3
  * _add(2, 1); // 3
  * _add(1, 1); // 2
  * _add(2, 2); // 4
  */
export default function _add<Value extends number, Next extends number>(value: Value, next: Next): Add<Value, Next>;
