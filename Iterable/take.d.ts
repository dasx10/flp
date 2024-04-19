/**
  * @function
  * @param {number} index
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * take(2)(test()) // Iterable<1 | 2>
  * take(2)([1, 2, 3]) // Iterable<1 | 2>
  * take(2)(new Set([1, 2, 3])) // Iterable<1 | 2>
  * take(1)(test()) // Iterable<1>
  * take(0)(test()) // Iterable<never>
  * take(3)(test()) // Iterable<1 | 2 | 3>
  * take(4)(test()) // Iterable<1 | 2 | 3>
  * ```
  */
export default function take(index: number): <Value>(value: Iterable<Value>) => Generator<Value, void, Generator<Value, void, undefined>>;
