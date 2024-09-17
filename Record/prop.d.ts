/**
  * @function
  * @name prop
  * @alias property
  * @param {PropertyKey} key
  * @returns {Function}
  * @example
  * ```javascript
  * prop("x")({ x: 1, y: 2. z: 3}) // 1
  * prop("x")({ x: undefined, y: 2. z: 3}) // undefined
  * prop("x")({ y: 2. z: 3}) // undefined
  * prop("y")({ x: 1, y: 2. z: 3}) // 2
  * prop("z")({ x: 1, y: 2. z: 3}) // 3
  * prop("d")({ x: 1, y: 2. z: 3}) // undefined
  * ```
  */
export default function prop<Key extends PropertyKey>(key: Key): {
  (value: { [key in Exclude<Key, PropertyKey>]}): undefined;
  <Value>(value: { [key in Key] : Value }): Value;
  <Value>(value: { [key in Key]?: Value }): Value | undefined;
}

export var then: (resolve: (module: typeof prop) => any) => any
