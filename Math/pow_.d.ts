/**
  * Raise a number to a power
  * @function
  * @param {number} x
  * @return {function}
  * @example
  * ```javascript
  * pow_(2)(4) // 16
  * pow_(2)(2) // 4
  * pow_(2)(3) // 8
  * ```
  */
export default function pow_<X extends number>(x: X): {
  <Y extends number>(y: Y): number;
  (y: number): number
}

export default function pow_(x: number): {
  <Y extends number>(y: Y): number;
  (y: number): number
};
