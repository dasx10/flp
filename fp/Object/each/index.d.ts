/**
  * @description iterates over the object
  * @function
  * @name each
  * @param {*} value
  * @returns {*}
  * @example
  * ```
  * each(console.log)({ a: 1, b: 2, c: 3 }) // { a: 1, b: 2, c: 3 }
  * // -> 1 "a" { a: 1, b: 2, c: 3 }
  * // -> 2 "b" { a: 1, b: 2, c: 3 }
  * // -> 3 "c" { a: 1, b: 2, c: 3 }
  * ```
  */
export default function each<Value>(call: (value: Value[keyof Value], key: keyof Key, values: Value) => any): (value: Value) => Value;
