/**
  * @example
  * ```javascript
  * nthBy(x => x[0])([1, 2, 3]); // 2
  * nthBy(x => x[0].x)([{ x: 2, y 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }, { x: 7, y: 8 }]); // { x: 5 , y: 6 }
  * nthBy(x => x[1])([1]); // undefined
  * ```
  * @param {function} call
  * @returns {function}
  * @name nthBy
  */
export default function nthBy<Value, Index extends number>(call: (value: Value) => Index): <Values extends readonly Value[]>(values: Values) => Values[Index]
export var then: (resolve: (module: typeof nthBy) => any) => any;
