/**
  * @function
  * @description Add two numbers
  * @name add
  * @alias addition
  * @alias plus
  * @param {number} next
  * @return {function}
  * @example
  * ```javascript
  * add(1)(2) // 3
  * add(1)(-2) // -1
  * add(-1)(2) // 1
  * add(-1)(-2) // -3
  * add(0)(0) // 0
  * add(0)(-0) // 0
  * ```
  */
export default function add(y: number): (x: number) => number;
export var then: (x: (module: typeof add) => any) => any;
