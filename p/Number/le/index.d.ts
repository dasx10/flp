type LE<Value extends number, Next extends number> = Value extends Next
  ? boolean
  : Next extends Value
    ? boolean
    : false
  ;

  /**
    * less than or equal
    * @param {number} value number
    * @param {number} next number
    * @returns {boolean} boolean
    * @example
    * _le(1, 2); // false
    * _le(2, 1); // true
    * _le(1, 1); // true
    * _le(2, 2); // true
    */
export default function le <
  Value extends number,
  Next  extends number,
>(value: Value, next: Next): LE<Value, Next>;
