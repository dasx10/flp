export type IS <
  Value extends number,
  Next  extends number,
> = number extends Value
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
  * @summary is equal
  * @function
  * @name is
  * @deprecated left is right
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * ```
  * is(1, 2); // false
  * is(2, 1); // false
  * is(1, 1); // true
  * is(2, 2); // true
  * ```
  */
export default function is<Value extends number, Next extends number>(value: Value, next: Next): value is Next;
export default function is<Value extends number, Next extends number>(value: Value, next: Next): next is Next;
export default function is<Value extends number, Next extends number>(value: Value, next: Next): IS<Value, Next>;
