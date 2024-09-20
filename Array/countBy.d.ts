import type ArrayIndex from "../Types/ArrayIndex";

export type CountBy<Values extends readonly any[], Key extends PropertyKey> = Values extends readonly []
  ? {}
  : {
    readonly [key in Key]: ArrayIndex<Values>
  }
;

/**
  * @example
  * ```javascript
  * countBy(Math.floor)([1.2, 2.3, 3.4, 4.5]); // { 1: 1, 2: 1, 3: 1, 4: 1 }
  * countBy(Math.abs)([-1, -2, -3, -4]); // { 1: 1, 2: 1, 3: 1, 4: 1 }
  * countBy(Math.abs)([-1, -2, -3, -4, 1, -2]); // { 1: 2, 2: 2, 3: 1, 4: 1 }
  * ```
  * @description Count the number of elements in an array
  * @param {function} call
  * @returns {function}
  */
export default function countBy<Return extends PropertyKey, Value>(call: (value: Value) => Return): <Values extends readonly any[]>(values: Values) => CountBy<Values, Return>;
export var then: (resolve: (value: typeof countBy) => any) => any;
