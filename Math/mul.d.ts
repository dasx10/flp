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
export default function mul(y: 0): (x: number) => 0;
export default function mul(y: 1): <X extends number>(x: number) => X;
export default function mul<Y extends number>(y: Y): {
  (x: 0): 0;
  (x: 1): Y;
  (x: number): number;
}
