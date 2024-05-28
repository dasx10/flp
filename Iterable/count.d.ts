/**
  * @function
  * @param {function} call
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * count(x => x === 2)(test()) // 1
  * count(x => x > 1)(test()) // 2
  * count(x => x === 4)(test()) // 0
  * count(x => x === 2)([1, 2, 3]) // 1
  * count(x => x === 4)([1, 2, 3]) // 0
  * count(x => x === 2)(new Set([1, 2, 3])) // 1
  * count(x => x === 4)(new Set([1, 2, 3])) // 0
  * ```
  */
export default function count<Value>(call: (value: Value) => any): (values: Iterable<Value>) => number;
