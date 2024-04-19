/**
  * Get the minimum of two numbers
  * @param {number} y
  * @return {function}
  * @example
  * ```javascript
  * min(1)(2) // 1
  * min(1)(-2) // -2
  * min(0)(-0) // 0
  * min(1)(1) // 1
  * ```
  */
export default function min<Y extends number>(y: Y): <X extends number>(x: X) => X | Y;
