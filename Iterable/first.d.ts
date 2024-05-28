/**
  * @function
  * @template Value
  * @param {Iterable<Value>} values
  * @return {Value | undefined}
  * @example
  * ```javascript
  * first([1, 2, 3]) // 1
  * first(new Set([1, 2, 3])) // 1
  * first([]) // undefined
  * first(new Set()) // undefined
  * ```
  */
export default function first<Value>(values: Iterable<Value>): Value | undefined;
