import type ArrayIndex from "../Types/ArrayIndex";
import type Lambda from "../Types/Lambda";

/**
  * @example
  * ```javascript
  * findLastIndexMax(Number)(["1", "2", 2, 1]) // 2
  * findLastIndexMax(Number)(["1", 1, 2, "2", 1]) // 3
  * findLastIndexMax(Number)([]) // -1
  * ```
  * @name findLastIndexMax
  */
export default function findLastIndexMax<Value>(call: Lambda<any, Value>): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values> | -1;
export const then: (resolve: (value: typeof findLastIndexMax) => any) => any;
