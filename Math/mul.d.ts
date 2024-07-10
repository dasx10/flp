/**
  * Get the product of two numbers
  * @param {number} y
  * @return {function}
  * @example
  * ```javascript
  * mul(2)(2) // 4
  * mul(1)(2) // 2
  * mul(1)(-2) // -2
  * mul(0)(-0) // 0
  * mul(1)(1) // 1
  * ```
  */
export default function mul<Y extends number>(y: Y): {
  <X extends number>(x: X): number;
  (x: number): number
};

export default function mul(y: number): {
  <X extends number>(x: X): number;
  (x: number): number
};
