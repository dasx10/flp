import type ArrayFilter from "../Types/ArrayFilter";
import type ArrayFiltered from "../Types/ArrayFiltered";

/**
  * @description Creates an array of values that satisfy the condition.
  * @function
  * @name filter
  * @param {Function} call
  * @returns {Function}
  * @example
  * ```
  * var is5 = (value) => value === 5;
  * var array = [1, 2, 3, 4, 5];
  * filter_([1, 2, 3, 4, 5])(is5); // [5];
  * filter_([1, 2, 5, 4, 5])(is5); // [5, 5];
  * filter_([1, 2, 3, 4, 6])(is5); // [];
  *
  * var gt2 = (value) => value > 2;
  * filter_([1, 2, 3, 4, 5])(gt2); // [3, 4, 5];
  * filter_([])(gt2); // [];
  * filter_([1, 2])(gt2); // [];
  * ```
  * @see {@link Array.prototype.filter}
  */
export default function filter_<Values extends readonly any[]>(values: Values): {
  <Value>(call: (value: Values[number]) => value is Value): ArrayFilter<Values, Value>;
  (call: (value: Values[number]) => any): ArrayFiltered<Values>;
}
