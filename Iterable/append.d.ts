/**
  * @function
  * @param {*} x
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * append(4)(test()) // Iterable<1 | 2 | 3 | 4>
  * append(4)([1, 2, 3]) // Iterable<1 | 2 | 3 | 4>
  * append(4)(new Set([1, 2, 3])) // Iterable<1 | 2 | 3 | 4>
  * ```
  */
export default function append<Y>(y: Y): <X>(x: Iterable<X>) => ({
  [Symbol.iterator](): Generator<Y | X, void, void>
});
