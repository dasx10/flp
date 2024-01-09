/**
  * division
  * `z = (x / y)`
  */
export type Div<Value extends number, Next extends number> = number;

/**
  * `Monoid` `Math`
  * division
  * `z = (x / y)`
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * _div(1, 2); // 0.5
  * _div(2, 1); // 2
  * _div(1, 1); // 1
  * _div(2, 2); // 1
  **/
export default function _div<Value extends number, Next extends number>(value: Value, next: Next): number;
