/**
  * @function
  * @name sub
  * @description Subtract two numbers
  * @alias subtract
  * @param {number} next
  * @returns {(x: number) => number}
  * @example
  * ```javascript
  * sub(1)(2) // 1
  * sub(1)(-2) // -3
  * sub(-1)(2) // 3
  * sub(-1)(-2) // 1
  * sub(0)(0) // 0
  * sub(0)(-0) // 0
  * ```
  */
export default function sub(y: number): (x: number) => number;
export var then: (resolve: (sub: typeof sub) => any) => any;
