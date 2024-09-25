/**
  * @example
  * ```javascript
  * root(2)(4) // 2
  * root(2)(9) // 3
  * root(3)(27) // 3
  * root(3)(-27) // -3
  * ```
  * @description Get the nth root of a number
  * @function
  * @name root
  * @param {number} y
  * @return {function}
  */
export default function root(y: number): (x: number) => number;
export var then: (resolve: (module: typeof root) => any) => any;
