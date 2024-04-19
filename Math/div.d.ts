import type Lambda from "../../Types/Lambda";


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
export default function div(y: 0): <X extends number = number>(x: Exclude<X, 0>) => 0;
export default function div<Y extends number = number>(y: Y): {
  (x: 1): Y;
  <X extends number>(x: Exclude<X, 0>): number extends X
    ? number
    : number extends Y
      ? number
      : X extends Y
        ? Y extends X
          ? 1
          : number
        : number;
}
