/**
  * not equal
  */
export type NE<Value extends number, Next extends number> = Value extends Next
  ? boolean
  : Next extends Value
    ? boolean
    : false
  ;

/**
  * `Logic`
  * not equal
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * _ne(1, 2); // true
  * _ne(2, 1); // true
  * _ne(1, 1); // false
  * _ne(2, 2); // false
  */
export default function _ne<Value extends number, Next extends number>(value: Value, next: Next): NE<Value, Next>;
