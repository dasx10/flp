/**
  * @param {Function} call
  * @returns {Function}
  * @example
  * ```javascript
  * away(x => x + 1)(0) // 1
  * away(x => x + 1)(1) // 1
  * away(x => x + 1)(2) // 1
  * away(x => x + 1)(3) // 1
  * away(x => 2)(null) // 2
  * away(x => 2)(19) // 19
  * ```
  */
export default function away<Return, Value>(call: (value: Value) => Return): (value: Value) => Return | Value;
export var then: (resolve: (value: typeof away) => any) => any;
