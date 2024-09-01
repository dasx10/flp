/**
  * @function
  * @name and
  * @description Returns `x` if `x` is truthy, otherwise returns `y` `x && y`
  * @param {*} y
  * @returns {Function}
  * @example
  * ```javascript
  * and(1)(1) // 1
  * and(1)(2) // 1
  * and(2)(2) // 2
  * and(0)(2) // 0
  * and(false)(2) // false
  * and(null)(2) // null
  * and(undefined)(2) // undefined
  * and({})(2) // {}
  * and({})(0) // 0
  * ```
  */
export default function and<Y>(y:Y): <X>(x:X) => X | Y;
export var then: (resolve: (module: typeof and) => any) => any;
