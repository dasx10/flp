/**
  * @function
  * @name concat
  * @param {Iterable} y
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * var test2 = function* values() { yield 4; yield 5; yield 6; }
  * concat(test2())(test()) // Iterable<1 | 2 | 3 | 4 | 5 | 6>
  * concat(test2())([1, 2, 3]) // Iterable<1 | 2 | 3 | 4 | 5 | 6>
  * concat(test2())(new Set([1, 2, 3])) // Iterable<1 | 2 | 3 | 4 | 5 | 6>
  * concat([1, 2, 3])(test()) // Iterable<1 | 2 | 3 | 1 | 2 | 3>
  * concat([1, 2, 3])([4, 5, 6]) // Iterable<1 | 2 | 3 | 4 | 5 | 6>
  * concat([1, 2, 3])(new Set([4, 5, 6])) // Iterable<1 | 2 | 3 | 4 | 5 | 6>
  * concat("test")(test()) // Iterable<1 | 2 | 3 | "t" | "e" | "s" | "t">
  * ```
  */
export default function concat<Y>(y: Iterable<Y>): <X>(x: Iterable<X>) => ({
  [Sumbol.iterator](): Generator<Y | X, void, void>
});
