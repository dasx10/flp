/**
  * @example
  * ```javascript
  * every(x => x > 0)([1, 2, 3]) // true
  * every(x => x > 0)([0, 1, 2, 3]) // false
  * every(x => x > 0)(new Set([1, 2, 3])) // true
  * every(x => x > 0)(new Set([0, 1, 2, 3])) // false
  * every(x => x > 0)((function*(){ yield 1; yield 2; yield 3; })()) // true
  * every(x => x > 0)((function*(){ yield 0; yield 1; yield 2; yield 3; })()) // false
  * ```
  * @description returns true if all values pass the test
  * @function
  * @param {function} test
  * @return {function}
  * @name every
  * @alias all
  */
export default function every<Predicate, X>(test: (x: X) => x is Predicate): <Values extends Iterable<X>>(values: Values) => values is (Iterable<Predicate> & Values);
export default function every<X>(test: (x: X) => *): (values: Iterable<X>) => boolean;

export var then: (resolve: (module: typeof every) => *) => *;
