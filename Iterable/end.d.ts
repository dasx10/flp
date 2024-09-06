/**
  * @function
  * @name end
  * @param {function} call
  * @return {function}
  * @example
  * ```javascript
  * function*test() { yield 1; yield 2; yield 3; }
  * end(x => x === 3)([1, 2, 3]) // Iterable<1 | 2>
  * end(x => x === 3)([1, 2, 3, 4, 5]) // Iterable<1 | 2>
  * end(x => x === 3)([0, 1, 2, 3, 4, 5]) // Iterable<0 | 1 | 2>
  * end(x => x === 3)(new Set([1, 2, 3])) // Iterable<1 | 2>
  * end(x => x === 3)(new Set([1, 2, 3, 4, 5])) // Iterable<1 | 2>
  * end(x => x === 3)(new Set([0, 1, 2, 3, 4, 5])) // Iterable<0 | 1 | 2>
  * end(x => x === 3)(test) // Iterable<1 | 2>
  * ```
  */
export default function end<Predicate, X>(call: (x: X) => x is Predicate): <Y extends X>(x: Iterable<Y>) => ({
  [Symbol.iterator](): Generator<Exclude<Y, Predicate>, void, void>
});

export default function end<X>(call: (x: X) => any): <Y extends X>(x: Iterable<Y>) => ({
  [Symbol.iterator](): Generator<Y, void, void>
});
