export type IS <Value extends number, Next extends number> = Value extends Next
  ? boolean
  : Next extends Value
    ? boolean
    : false;

/**
  * `Logic`
  * is
  * @param {number} value number
  * @param {number} next number
  * @returns {boolean} boolean
  * @example
  * _is(1, 2); // false
  * _is(2, 1); // false
  * _is(1, 1); // true
  * _is(2, 2); // true
  */
export default function _is<Value extends number, Next extends number>(value: Value, next: Next): value is Next;
export default function _is<Value extends number, Next extends number>(value: Value, next: Next): next is Next;
export default function _is<Value extends number, Next extends number>(value: Value, next: Next): IS<Value, Next>;
