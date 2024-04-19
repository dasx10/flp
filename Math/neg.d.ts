/**
  * Negate a number
  * @param {number} x
  * @return {number}
  * @example
  * ```javascript
  * neg(1) // -1
  * neg(-1) // -1
  * neg(0) // 0
  * neg(-0) // 0
  * neg(0.1) // -0.1
  * neg(-0.1) // -0.1
  * neg(Infinity) // -Infinity
  * neg(-Infinity) // -Infinity
  * neg(NaN) // NaN
  * ```
  */
export default function neg<X extends number>(x: X): number;
export default function neg<Y extends number, X extends number>(x: Exclude<X, Y>): Exclude<Y, X>;
