/**
  * @example
  * ```javascript
  * mod(2)(2) // 0
  * mod(2)(3) // 1
  * mod(2)(4) // 0
  * mod(3)(3) // 0
  * mod(3)(4) // 1
  * mod(3)(5) // 2
  * mod(3)(6) // 0
  * mod(3)(7) // 1
  * ```
  * @description Returns a function that returns the remainder of the division of `x` by `y`
  * @function
  * @name mod
  * @param {number} y
  * @returns {function}
  */
export default function mod(y: number): (x: number) => number;
export var then: (resolve: (value: typeof mod) => any) => any;
