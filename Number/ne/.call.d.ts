/**
  * not equal
  */
export type NE<Value extends number, Next extends number> = number extends Value
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
  * @summary not equal
  * @function
  * @name ne
  * @alias notEqual
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * ```
  * ne(1, 0); // true
  * ne(0, 1); // true
  * ne(1, 1); // false
  * ne(0, 0); // false
  * ne(1, 2); // true
  * ne(2, 1); // true
  * ne(2, 2); // false
  * ```
  */
export default function ne(value: 0, next: 1): true;
export default function ne(value: 1, next: 0): true;
export default function ne(value: 1, next: 1): false;
export default function ne(value: 0, next: 0): false;
export default function ne<Value extends number, Next extends number>(value: Value, next: Next): NE<Value, Next>;
