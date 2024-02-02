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
  * @summary greater than or equal
  * @function
  * @name ge
  * @description greater than or equal two numbers
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * ```
  * ge(1, 2); // false
  * ge(2, 1); // true
  * ge(1, 1); // true
  * ge(2, 2); // true
  * ge(0, 2); // false
  * ```
  */
export default function ge<Value extends number, Next extends number>(value: Value, next: Next): GE<Value, Next>;
