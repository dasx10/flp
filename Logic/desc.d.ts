/**
  * @param {Function} call
  * @returns {Function}
  * @example
  * ```javascript
  * sort(desc(prop("x")))([{x: 3}, {x: 1}, {x: 2}]) // [{x: 3}, {x: 2}, {x: 1}]
  * sort(desc(id))([3, 1, 2]) // [3, 2, 1]
  * sort(desc(x => -x))([3, 1, 2]) // [1, 2, 3]
  * ```
  */
export default function desc<Value>(call: (x: Value) => number): (y: Value) => (x: Value) => number;
declare export var then : (resolve: (value: typeof desc) => any) => any;
