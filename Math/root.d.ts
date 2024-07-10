/**
  * Get the nth root of a number
  * @function
  * @name root
  * @param {number} y
  * @return {function}
  * @example
  * ```javascript
  * root(2)(4) // 2
  * root(2)(9) // 3
  * root(3)(27) // 3
  * root(3)(-27) // -3
  */
export default function root <Y extends number>(y: Y): {
  <X extends number>(x: X): number;
  (x: number): number;
};

export default function root(y: number): {
  <X extends number>(x: X): number;
  (x: number): number;
};
