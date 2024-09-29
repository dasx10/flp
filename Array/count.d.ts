import type ArrayIndex from "../Types/ArrayIndex";

/**
  * @example
  * ```javascript
  * count(x => x)([1, 2, 3]); // 3
  * count(x => x)([]); // 0
  * count(x => x > 1)([1, 2, 3]); // 2
  * count(x => x > 2)([1, 2, 3]); // 1
  * count(x => x > 3)([1, 2, 3]); // 0
  * count(x => x < 3)([1, 2, 3]); // 2
  * count(x => x < 2)([1, 2, 3]); // 1
  * count(x => x < 1)([1, 2, 3]); // 0
  * count(x => x === 1)([1, 2, 3]); // 1
  * count(x => x === 1)([1, 2, 3, 1]); // 2
  * count(x => x === 1)([1, 2, 3, 1, 1]); // 3
  * ```
  * @param {function} call
  * @returns {function}
  * @name count
  */
export default function count<Value>(call: (value: Value) => any): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values> | Values['length'];
export const then: (resolve: (module: typeof count) => any) => any;
