export type Or<X, Y> = X extends false ? Y : X extends 0 ? Y : X extends "" ? Y : X extends null ? Y : X extends undefined ? Y : X | Y

/**
  * @function
  * @name or
  * @description Returns `x` if `x` is truthy, otherwise returns `y` `x || y`
  * @param {*} y
  * @returns {Function}
  * @example
  * ```javascript
  * or(1)(1) // 1
  * or(1)(2) // 1
  * or(2)(2) // 2
  * or(0)(2) // 2
  * or(false)(2) // 2
  * or(null)(2) // 2
  * or(undefined)(2) // 2
  * or({})(2) // 2
  * or({})(0) // {}
  * or(0)(0) // 0
  * or(false)(false) // false
  * or(null)(null) // null
  * or(undefined)(undefined) // undefined
  * or(2)(false) // 2
  * ```
  */
export default function or<Y>(y:Y): <X>(x: X) => Or<X, Y>;
export var then: (resolve: (value: typeof or) => any) => any;
