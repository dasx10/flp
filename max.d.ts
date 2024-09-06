/**
  * @function
  * @param {number} y
  * @return {function}
  * @example
  * ```javascript
  * max(1)(2) // 2
  * max(1)(-2) // 1
  * max(0)(-0) // 0
  * max(1)(1) // 1
  * ```
  */
export default function max(y: number): (x: number) => number;
export var then: (resolve: (module: typeof max) => any) => any;
