/**
  * @example
  * ```javascript
  * var test = function* values() { yield 0; yield ""; yield undefined; }
  * any(x => x)(test()) // undefined
  * any(x => x + 1)([-1, -2, -3]) // -1
  * any(x => x)([false, 1, 2, 3]) // 1
  * any(x => x)(new Set([false, 0, 2, 3])) // 2
  *
  * ```
  * @description returns the first truthy value
  * @param {function} test
  * @return {function}
  * @function
  * @name any
  * @alias some
  */
export default function any<Return, X>(test: (x: X) => Return): {
  (values: readonly []): undefined;
  (values: readonly [X, ...X[]]): Return;
  (values: Iterable<X>): Return | undefined;
}

export var then: (resolve: (module: typeof any) => any) => any;
