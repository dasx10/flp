/**
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * reduce(x => y => x + y)(0)(test()) // 6
  * reduce(x => y => x + y)(0)([1, 2, 3]) // 6
  * reduce(x => y => x + y)(0)(new Set([1, 2, 3])) // 6
  * ```
  * @function
  * @name reduce
  * @param {function} call
  * @returns {function}
  */
export default function reduce<Y, X>(call: (x: X) => (y: Y) => X): (initial: Y) => (x: Iterable<X>) => Y | X;
export const then: (resolve: (value: typeof reduce) => any) => any;
