/**
  * @description Return new object with keys aligned.
  * @function
  * @name align
  * @alias keySort
  * @param {Object} value
  * @returns {Object}
  * @example
  *
  * ```
  * align({ a: 1, b: 2, c: 3 }) // { a: 1, b: 2, c: 3 }
  * align({ a: 1, c: 3, b: 2 }) // { a: 1, b: 2, c: 3 }
  * align({ b: 2, c: 3, a: 1 }) // { a: 1, b: 2, c: 3 }
  * align({ b: 2, a: 1, c: 3 }) // { a: 1, b: 2, c: 3 }
  * align({ c: 3, a: 1, b: 2 }) // { a: 1, b: 2, c: 3 }
  * align({ c: 3, b: 2, a: 1 }) // { a: 1, b: 2, c: 3 }
  * ```
  */
export default function align<Value extends Record<PropertyKey, any>>(value: Value): Value;
