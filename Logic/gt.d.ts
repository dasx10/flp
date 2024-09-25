/**
  * @example
  * ```javascript
  * gt(2)(3) // true
  * gt(2)(2) // false
  * gt(2)(1) // false
  * gt(1)(2) // true
  * gt(1)(1) // false
  * ```
  * @description Returns `true` if `x` is greater than `y`
  * @function
  * @name gt
  * @alias greaterThan
  * @param {number} y
  * @returns {function}
  */
export default function gt(y: number): (x: number) => boolean;
export var then: (resolve: (value: typeof gt) => any) => any;
