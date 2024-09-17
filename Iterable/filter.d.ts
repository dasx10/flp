/**
  * @example
  * ```javascript
  * const isOdd = x => x % 2
  * const odds = filter(isOdd);
  * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  * odds(arr); // Iterable<1 | 3 | 5 | 7 | 9>
  * odds(new Set(arr)); // Iterable<1 | 3 | 5 | 7 | 9>
  * odds((function*(){ yield 1; yield 2; yield 3})) // Iterable<1 | 3>
  *
  * const isEven = x => !isOdd(x)
  * const evens = filter(isEven);
  * evens(arr); // Iterable<2 | 4 | 6 | 8 | 10>
  * evens(new Set(arr)); // Iterable<2 | 4 | 6 | 8 | 10>
  * evens((function*(){ yield 1; yield 2; yield 3})) // Iterable<2>
  * ```
  * @param {Function} test
  * @return {Function}
  */
export default function filter<Predicate, X>(test: (x: X) => x is Predicate): (values: Iterable<X>) => ({ [Symbol.iterator](): Generator<Predicate, void, void> })
export default function filter<X>(test: (x: X) => any): (values: Iterable<X>) => ({ [Symbol.iterator](): Generator<X, void, any> })

export var then: (resolve: (module: typeof filter) => any) => any
