/**
  * @function `c = a * b`
  * @description Get the product of two numbers
  * @name mul
  * @alias multiply
  * @param {number} y
  * @return {function}
  * @example
  * ```javascript
  * mul(2)(2) // 4
  * mul(1)(2) // 2
  * mul(1)(-2) // -2
  * mul(0)(-0) // 0
  * mul(1)(1) // 1
  * ```
  */
export function mul(y: number): (x: number) => number;
export var then: (resolve: (module: typeof mul) => any) => any;
