/**
  * @function
  * @name dec
  * @alias decrement
  * @param {number} x
  * @return {number}
  * @example
  * ```javascript
  * dec(1) // 0
  * dec(0) // -1
  * dec(-1) // -2
  * dec(10) // 9
  * dec(-10) // -11
  * dec(0.1) // -0.9
  * dec(-0.1) // -1.1
  * dec(NaN) // NaN
  * ```
  */
export default function dec<X extends number>(x: X): number
export default function dec(x: number): number
export var then: (resolve: (module: typeof dec) => any) => any
