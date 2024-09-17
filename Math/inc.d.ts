/**
  * @function
  * @name inc
  * @alias increment
  * @param {number} x
  * @return {number}
  * @example
  * ```javascript
  * inc(1) // 2
  * inc(-1) // 0
  * inc(0) // 1
  * inc(0.1) // 1.1
  * inc(-0.1) // -0.9
  * inc(Infinity) // Infinity
  * inc(-Infinity) // -Infinity
  * inc(NaN) // NaN
  * ```
  */
export default function inc<X extends number>(x: X): number;
export default function inc(x: number): number;
export var then: (resolve: (module: typeof inc) => any) => any;
