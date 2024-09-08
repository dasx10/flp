/**
  * @function
  * @param {function} call
  * @returns {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * find(x => x === 2)(test()) // 2
  * find(x => x === 4)(test()) // undefined
  * find(x => x === 2)([1, 2, 3]) // 2
  * find(x => x === 4)([1, 2, 3]) // undefined
  * find(x => x === 2)(new Set([1, 2, 3])) // 2
  * find(x => x === 4)(new Set([1, 2, 3])) // undefined
  * ```
  */
export default function find<Y, X>(call: (x: X) => x is Y): (x: Iterable<X>) => (X & Y) | undefined;
export default function find<X>(call: (x: X) => any): (x: Iterable<X>) => X | undefined;

export var then:(resolve: (module: typeof find) => any) => any
