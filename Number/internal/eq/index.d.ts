/** equal */
export type EQ<
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
      : Test extends Value
        ? boolean
        : false;

/**
  * `Logic`
  * equal
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * _eq(1, 2); // false
  * _eq(2, 1); // false
  * _eq(1, 1); // true
  */
export default function _eq<Value extends number, Next extends number>(value: Value, next: Next): EQ<Value, Next>;
