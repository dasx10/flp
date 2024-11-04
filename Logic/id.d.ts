/**
  * @example
  * ```javascript
  * id(1) // 1
  * const point = { x: 1, y: 2 };
  * id(point) === point // true
  * ```
  * @description always returns parameter
  * @param {any} value
  * @returns {any}
  * @function
  * @name id
  * @alias identity
  */
export default function id<Value>(value : Value) : Value
export var then: (resolve: (value: typeof id) => any) => any
