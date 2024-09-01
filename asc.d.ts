/**
  * @param {Function} call
  * @returns {Function}
  * @example
  * ```javascript
  * sort(asc(prop("x")))([{x: 3}, {x: 1}, {x: 2}]) // [{x: 1}, {x: 2}, {x: 3}]
  * sort(asc(id))([3, 1, 2]) // [1, 2, 3]
  * sort(asc(x => -x))([3, 1, 2]) // [3, 2, 1]
  * ```
  */
export default function asc<Value>(call: (x: Value) => number): (y: Value) => (x: Value) => number;
declare export var then : (resolve: (module: typeof asc) => any) => any;
