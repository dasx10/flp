/**
  * @description Subtract two numbers
  * @function
  * @name sub_
  * @param {number} x
  * @return {function}
  * @example
  * ```javascript
  * sub_(1)(2) // -1
  * sub_(1)(-2) // 3
  * sub_(0)(0) // 0
  * sub_(0)(-0) // 0
  * ```
  */
export default function sub_<X extends number>(x: X): {
  <Y extends number>(y: Y): number;
  (y: number): number
};

export default function sub_(x: number): {
  <Y extends number>(y: Y): number;
  (y: number): number;
};
