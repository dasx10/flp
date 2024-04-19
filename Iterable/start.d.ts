import type Lambda from "../Types/Lambda";
/**
  * @function
  * @param {function} test
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * start(x => x > 1)(test) // Iterable<2 | 3>
  * start(x => x > 2)(test) // Iterable<3>
  * start(x => x > 3)(test) // Iterable<never>
  * start(x => x > 4)(test) // Iterable<never>
  * start(x => x > 0)(test) // Iterable<1 | 2 | 3>
  * start(x => x > 0)([1, 2, 3]) // Iterable<1 | 2 | 3>
  * start(x => x > 1)([1, 2, 3]) // Iterable<2 | 3>
  * start(x => x > 1)(new Set([1, 2, 3])) // Iterable<2 | 3>
  * ```
  */
export default function start<Value>(test: Lambda<any, Value>): Lambda<Generator<Value, void, void>, Iterable<Value>>;
