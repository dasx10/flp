import type ArrayIndex from "../Types/ArrayIndex";
import type ArrayIndexOf from "../Types/ArrayIndexOf";

/**
  * @example
  * ```javascript
  * var is3 = (value) => value === 3;
  * findLastIndex(is3)([1, 2, 3, 4, 5]); // 2
  * findLastIndex(is3)([1, 2, 3, 4, 5, 3]); // 5
  * findLastIndex(is3)([3, 2, 3, 4, 5, 3]); // 5
  * findLastIndex(is3)([3, 2, 3, 4, 5, 3, 2]); // 5
  * findLastIndex(is3)([3, 2, 3, 4, 5, 3, 3]); // 6
  * findLastIndex(is3)([]); // -1
  * findLastIndex(is3)([1, 2]); // -1
  * ```
  * @description Find the last index of an element in an array
  * @param {function} test
  * @returns {function}
  */
export default function findLastIndex<Is, Value>(call: (value: Value) => value is Is): <Values extends readonly Value[]>(values: Values) => ArrayIndexOf<Values, Is>
export default function findLastIndex<Value>(call: (value: Value) => any): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values> | -1;

export var then: (resolve: (module: typeof findLastIndex) => any) => any;
