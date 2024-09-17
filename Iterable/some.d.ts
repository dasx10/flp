/**
  * @example
  * ```javascript
  * var is5 = (value) => value === 5;
  * some(is5)([1, 2, 3, 4, 5]); // true
  * some(is5)(new Set([1, 2, 5, 4, 5])); // true
  * some(is5)([1, 2, 3, 4, 6]); // false
  * some(is5)([]); // false
  * some(is5)([1, 2]); // false
  * some(is5)((function*(){yield 5;})()); // true
  * some(is5)((function*(){yield 0;})()); // true
  * ```
  * @description Check if at least one value satisfies the condition
  * @function
  * @name some
  * @alias any
  * @param {Function} call
  * @returns {Function}
  */
export default function some<Value>(call: (value: Value) => any): (values: Iterable<Value>) => boolean;

export var then: (call: (module: typeof some) => any) => <Value>(values: Iterable<Value>) => boolean;
