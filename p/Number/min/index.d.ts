/** minimum */
export type Min <Value extends number, Next extends number> = Value | Next;

/**
  * `Monoid`
  * minimum
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * _min(1, 2); // 1
  * _min(2, 1); // 1
  * _min(1, 1); // 1
  * _min(2, 2); // 2
  * _min(0, 2); // 0
  * _min(2, 0); // 0
  */
export default function min<Value extends number, Next extends number>(value: Value, next: Next): Min<Value, Next>;
