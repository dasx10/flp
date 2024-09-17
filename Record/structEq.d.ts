/**
  * @function
  * @param {*} y
  * @returns {Function}
  * @example
  * eq(1)(1) // true
  * eq(1)(2) // false
  * eq(1)(1n) // false
  * eq({x:1, y:2})({x:1, y:2}) // true
  * eq({x:1, y:2})({x:1, z:2}) // false
  * eq({x:1, y:2})({x:1, y:2, z:3}) // false
  * eq({x:1, y:2})({x:1, y:"2"}) // false
  * eq([1, 2, 3])([1, 2, 3]) // true
  * ```
  */
export default function structEq<Y>(y: Y):{
  <X>(x: X):x is X & Y;
  <X>(x: X):y is X & Y;
}
