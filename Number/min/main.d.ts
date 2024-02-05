/** minimum */
export type Min <Value extends number, Next extends number> = Value | Next;

/**
  * @summary minimum
  * @function
  * @name min
  * @alias minimum
  * @description minimum into two numbers
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * ```
  * min(0, 1); // 0
  * min(1, 0); // 0
  * min(0, 0); // 0
  * min(1, 1); // 1
  * min(1, 2); // 1
  * min(2, 1); // 1
  * min(2, 2); // 2
  * min(0, 2); // 0
  * min(2, 0); // 0
  * ```
  * @see {@link Math.min}
  */
export default function min(value: 0, next: 1): 0;
export default function min(value: 1, next: 0): 0;
export default function min(value: 1, next: 1): 1;
export default function min(value: 0, next: 0): 0;
export default function min<Value extends number, Next extends number>(value: Value, next: Next): Min<Value, Next>;
