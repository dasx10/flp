import type { FlatIterable } from "./flat";
/**
  * @function
  * @name flatMap
  * @alias chain
  * @param {function} call
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * var incs = flatMap(x => x + 1)
  * incs(test()) // Iterable<2 | 3 | 4>
  * incs([1, 2, 3]) // Iterable<2 | 3 | 4>
  *
  * flatMap(x => x)([1, 2, [3, 4], new Set([5, 5, 6])]) // Iterable<1 | 2 | 3 | 4 | 5 | 6>
  * ```
  */
export default function flatMap<Return, X>(call: (x: X) => Return): (x: Iterable<X>) => ({
  [Symbol.iterator]: () => Generator<FlatIterable<1, Return>, void, void>
});
