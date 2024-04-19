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
export default function div_<X extends number = number>(x: Exclude<X, 0>): {
  (y: 0): 0;
  <Y extends number = number>(y: Exclude<Y, 0>): number extends X
    ? number
    : number extends Y
      ? number
      : X extends Y
        ? Y extends X
          ? 1
          : number
        : number;
}
