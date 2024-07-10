/**
  * @description Get the average of two numbers
  * @function
  * @name avg
  * @alias average
  * @param {number} y
  * @return {function}
  * @example
  * ```javascript
  * avg(1)(2) // 1.5
  * avg(1)(-2) // -0.5
  * avg(0)(-0) // 0
  * avg(1)(1) // 1
  * ```
  */
export default function avg<Y extends number>(y: Y): {
  <X extends number>(x: X): number;
  (x: number): number
};

export default function avg(y: number): {
  <X extends number>(x: X): number;
  (x: number): number
};
