/**
  * @function
  * @name map
  * @param {function} call
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * var incs = map(x => x + 1)
  * incs(test()) // Iterable<2 | 3 | 4>
  * incs([1, 2, 3]) // Iterable<2 | 3 | 4>
  * ```
  */
export default function map<Return, X>(call: (x: X) => Return): (values: Iterable<X>) => ({
  [Symbol.iterator](): Generator<Return, void, void>
});
