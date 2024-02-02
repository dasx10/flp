/**
  * multiplication
  */
export type Mul<Value extends number, Next extends number> = number;


/**
  * @summary multiplication
  * @function `(x, y) => x * y`
  * @name mul
  * @alias multiplication
  * @description multiplication into two numbers
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * ```
  * mul(1, 0); // 0
  * mul(0, 1); // 0
  * mul(1, 1); // 1
  * mul(0, 0); // 0
  * mul(1, 2); // 2
  * mul(2, 1); // 2
  * mul(2, 2); // 4
  * mul(0, 2); // 0
  * mul(2, 0); // 0
  * mul(10, 10); // 100
  * mul(NaN, 1); // NaN
  * mul(1, NaN); // NaN
  * ```
  */
export default function mul(value: 0, next: 0): 0;
export default function mul(value: 1, next: 0): 0;
export default function mul(value: 0, next: 1): 0;
export default function mul(value: 1, next: 1): 1;
export default function mul <Value extends number, Next extends number>(value: Value, next: Next): number;
