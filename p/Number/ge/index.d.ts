/** greater than or equal */
export type GE<
  Value extends number = number,
  Test  extends number = number,
> = number extends Value
  ? boolean
  : number extends Test
    ? boolean
    : Value extends Test
      ? Test extends Value
        ? true
        : boolean
      : boolean
      ;

/**
  * `Logic`
  * greater than or equal
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * _ge(1, 2); // false
  * _ge(2, 1); // true
  * _ge(1, 1); // true
  * _ge(2, 2); // true
  * _ge(0, 2); // false
  */
export default function _ge<Value extends number, Next extends number>(value: Value, next: Next): GE<Value, Next>;
