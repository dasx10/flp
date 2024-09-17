/**
  * @function
  * @name eq
  * @description Check if `x` is `y` `x == y`
  * @param {*} y
  * @returns {Function}
  * @example
  * ```javascript
  * eq(1)(1) // true
  * eq(1)(2) // false
  * eq(1)("1") // true
  * eq("1")("1") // true
  * eq("1")("2") // false
  * eq({})({}) // false
  * eq({})({a: 1}) // false
  * eq({a: 1})({a: 1}) // false
  * var a = {}
  * eq(a)(a) // true
  * eq(a)({}) // false
  * ```
  */
export default function eq(y: any): (x: any) => boolean;
export var then: (resolve: (value: typeof eq) => any) => any;
