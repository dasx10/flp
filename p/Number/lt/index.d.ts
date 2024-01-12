/**
  * less than
  */
export type NumberLT <Value extends number, Next extends number> = number extends Value
  ? boolean
  : number extends Next
    ? boolean
    : Value extends Next
      ? Next extends Value
        ? false
        : boolean
      : boolean
;

/**
  * @summary less than
  * @function
  * @name lt
  * @alias lessThan
  * @description less than two numbers
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * ```
  * lt(1, 2); // false
  * lt(2, 1); // true
  * lt(1, 1); // false
  * lt(2, 2); // false
  * ```
  */
export default function _lt <
  Value extends number,
  Next  extends number,
>(value: Value, next: Next): LT<Value, Next>;
