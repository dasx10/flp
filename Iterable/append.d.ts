/**
  * @function
  * @param {*} value
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * append(4)(test()) // Iterable<1 | 2 | 3 | 4>
  * append(4)([1, 2, 3]) // Iterable<1 | 2 | 3 | 4>
  * append(4)(new Set([1, 2, 3])) // Iterable<1 | 2 | 3 | 4>
  * ```
  */
export default function append<Value>(value: Value): <Next>(values: Iterable<Next>) => Generator<Value | Next, void, undefined>;
