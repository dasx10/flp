/**
  * multiplication
  */
export type Mul<Value extends number, Next extends number> = number;


/**
  * `Monoid` `Math`
  * multiplication
  * `z = (x * y)`
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * _mul(1, 2); // 2
  * _mul(2, 1); // 2
  * _mul(1, 1); // 1
  * _mul(2, 2); // 4
  * _mul(0, 2); // 0
  * _mul(2, 0); // 0
  * _mul(10, 10); // 100
  */
export default function _mul <Value extends number, Next extends number>(value: Value, next: Next): number;
