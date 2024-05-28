/**
  * @description Insert a value into an iterable
  * @function
  * @name insert
  * @param {function} call
  * @return {function}
  * @example
  * ```javascript
  * insert(x => x === 2)("hello")([1, 2, 3]) // Iterable<1 | "hello" | 3>
  * ```
  */
export default function insert<Value>(call: (value: Value) => any): <Next>(next: Next) => (values: Iterable<Value>) => Generator<Value | Next, void, undefined>;
