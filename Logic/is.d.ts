/**
  * @function
  * @name is
  * @description Check if `x` is `y` `x === y`
  * @param {any} y
  * @returns {Function}
  * @example
  * ```javascript
  * is(1)(1) // true
  * is(1)(2) // false
  * is(2)(2) // true
  * is(2)(1) // false
  * is(1)("1") // false
  * is("1")("1") // true
  * is("1")("2") // false
  * var x = {};
  * is(x)(x) // true
  * is(x)({}) // false
  * is({})({}) // false
  * ```
  */
export default function is<Y>(y : Y): (x:unknown) => x is Y;
export default function is(y: any): (x: any) => boolean;
declare export var then: (resolve: (value: typeof is) => any) => any;
