/**
  * @example
  * ```javascript
  * sumBy(x => x)([1, 2, 3]); // 6
  * sumBy(x => x)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
  * sumBy(point => point.x)([{ x: 1 }, { x: 2 }, { x: 3, y: 4 }]); // 6
  * sumBy(Math.abs)([-1, 2, -3]); // 6
  * sumBy(Number)([1, 2, "3"]); // 6
  * sumBy(x => x)([]); // 0
  * ```
  * @param {function} call
  * @returns {function}
  * @name sumBy
  */
export default function sumBy<Value>(call: (value: Value) => number): <Values extends readonly Value[]>(values: Values) => number;
export var then: (resolve: (module: typeof sumBy) => any) => any;
