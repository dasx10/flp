import type IterateCall from "../types/IterateCall";
import type filterRight from "../filterRight";

export type ArrayFilter<Values extends readonly any[]> = Values extends readonly [infer First, ...infer Rest]
  ? [] | [First] | [First, ...ArrayFilter<Rest>] | ArrayFilter<Rest>
  : Values extends readonly [...infer Rest, infer Last]
    ? [] | [Last] | [...ArrayFilter<Rest>, Last] | ArrayFilter<Rest>
    : Values extends readonly []
      ? []
      : Values | []
;

/**
  * @function
  * @name filter
  * @description Creates an array of values that satisfy the condition.
  * @param {Function} call
  * @returns {Function}
  * @example
  * ```
  * var is5 = (value) => value === 5;
  * filter(is5)([1, 2, 3, 4, 5]); // [5];
  * filter(is5)([1, 2, 5, 4, 5]); // [5, 5];
  * filter(is5)([1, 2, 3, 4, 6]); // [];
  *
  * var gt2 = (value) => value > 2;
  * filter(gt2)([1, 2, 3, 4, 5]); // [3, 4, 5];
  * filter(gt2)([]); // [];
  * filter(gt2)([1, 2]); // [];
  * ```
  * @see {@link Array.prototype.filter}
  * @see {@link filterRight}
  */
export default function filter<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => ArrayFilter<Values>;
