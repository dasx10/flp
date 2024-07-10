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
export default function div_<X extends number>(x: X): {
  <Y extends number>(y: Y): number;
  (y: number): number
};

export default function div_(x: number): {
  <Y extends number>(y: Y): number;
  (y: number): number
};
