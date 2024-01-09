/**
  * power
  */
export type Pow<Value extends number, Next extends number> = number;

/**
  * `Monoid` `Math`
  * power
  * `z = (x ** y)`
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * _pow(1, 2); // 1
  * _pow(2, 1); // 2
  * _pow(1, 1); // 1
  * _pow(2, 2); // 4
  * _pow(0, 2); // 0
  * _pow(2, 3); // 6
  */
export default function _pow<Value extends number, Next extends number>(value: Value, next: Next): number;
