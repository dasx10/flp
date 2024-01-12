type NumberLE<Value extends number, Next extends number> = number extends Value
  ? boolean
  : number extends Next
    ? boolean
    : Value extends Next
      ? Next extends Value
        ? true
        : boolean
      : Next extends Value
        ? boolean
        : false
;


  /**
    * @summary less than or equal
    * @description less than or equal two numbers
    * @function
    * @name le
    * @alias lessThanOrEqual
    * @param {number} value number
    * @param {number} next number
    * @returns {boolean} boolean
    * @example
    * ```
    * le(1, 2); // false
    * le(2, 1); // true
    * le(1, 1); // true
    * le(2, 2); // true
    * ```
    */
export default function le <
  Value extends number,
  Next  extends number,
>(value: Value, next: Next): NumberLE<Value, Next>;
