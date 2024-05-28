/**
  * @description Concatenate two iterables
  * @function
  * @name concat_
  * @param {Iterable} x
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * var test2 = function* values() { yield 4; yield 5; yield 6; }
  * concat_(test())(test2()) // Iterable<1 | 2 | 3 | 4 | 5 | 6>
  * concat_(test())([1, 2, 3]) // Iterable<1 | 2 | 3 | 1 | 2 | 3>
  * concat_(test())(new Set([1, 2, 3])) // Iterable<1 | 2 | 3 | 1 | 2 | 3>
  * concat_([1, 2, 3])(test()) // Iterable<1 | 2 | 3 | 1 | 2 | 3>
  * concat_([1, 2, 3])([4, 5, 6]) // Iterable<1 | 2 | 3 | 4 | 5 | 6>
  * concat_([1, 2, 3])(new Set([4, 5, 6])) // Iterable<1 | 2 | 3 | 4 | 5 | 6>
  * concat_(test())("test") // Iterable<1 | 2 | 3 | "t" | "e" | "s" | "t">
  * ```
  */
export default function concat_<X>(x: Iterable<X>): <Y>(y: Iterable<Y>) => Generator<X | Y, void, void>;
