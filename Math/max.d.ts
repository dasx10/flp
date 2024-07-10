/**
  * Get the maximum of two numbers
  * @param {number} y
  * @return {function}
  * @example
  * ```javascript
  * max(1)(2) // 2
  * max(1)(-2) // 1
  * max(0)(-0) // 0
  * max(1)(1) // 1
  * ```
  */
export default function max<Y extends number>(y: Y): {
  <X extends number>(x: X): X | Y;
  (x: number): number
};

export default function max(y: number): {
  <X extends number>(x: X): number;
  (x: number): number
};
