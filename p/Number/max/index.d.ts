/** maximum */
type Max <Value extends number, Next extends number> = Value | Next;

/**
  * @summary maximum
  * @function
  * @name max
  * @alias maximum
  * @description maximum into two numbers
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * ```
  * max(1, 0); // 1
  * max(0, 1); // 1
  * max(1, 1); // 1
  * max(0, 0); // 0
  * max(1, 2); // 2
  * max(2, 1); // 2
  * max(2, 2); // 2
  * max(0, 2); // 2
  * max(2, 0); // 2
  * ```
  * @see Math.max
  */
export default function max(value: 1, next: 0): 1;
export default function max(value: 0, next: 1): 1;
export default function max(value: 1, next: 1): 1;
export default function max(value: 0, next: 0): 0;
export default function max<Value extends number, Next extends number>(value: Value, next: Next): Max<Value, Next>;
