/**
  * @function
  * @param {Iterable<*>} value
  * @return {Iterable<*>}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * tail(test()) // Iterable<2 | 3>
  * tail([1, 2, 3]) // Iterable<2 | 3>
  * tail(new Set([1, 2, 3])) // Iterable<2 | 3>
  * ```
  */
export default function tail<Value>(value: Iterable<Value>): Generator<Value, Value, undefined>;
