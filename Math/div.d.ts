/**
  * Divide two numbers
  * @param {number} next
  * @return {function}
  * @example
  * ```javascript
  * div(2)(4) // 2
  * div(2)(-4) // -2
  * div(0)(0) // NaN
  * div(0)(-0) // NaN
  * div(0)(1) // 0
  * div(1)(0) // Infinity
  * ```
  */
export default function div<Y extends number>(y: Y): {
  <X extends number>(x: X): number;
  (x: number): number
};

export default function div(y: number): {
  <X extends number>(x: X): number;
  (x: number): number
};
