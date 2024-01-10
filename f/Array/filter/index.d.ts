import type IterateCall from "../types/IterateCall";
import type ArrayFilter from "../../../types/Array/Filter";

import type filterRight from "../filterRight";

/**
  * @description Creates an array of values that satisfy the condition.
  * @function
  * @name filter
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
