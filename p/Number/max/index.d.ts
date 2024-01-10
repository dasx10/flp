/** maximum */
type Max <Value extends number, Next extends number> = Value | Next;

/**
  * `Monoid`
  * maximum
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * _max(1, 2); // 2
  * _max(2, 1); // 2
  * _max(1, 1); // 1
  * _max(2, 2); // 2
  * _max(0, 2); // 2
  * _max(2, 0); // 2
  */
export default function max<Value extends number, Next extends number>(value: Value, next: Next): Max<Value, Next>;
