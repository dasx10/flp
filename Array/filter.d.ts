import type ArrayFilter   from "../../Types/ArrayFilter";
import type ArrayFiltered from "../../Types/ArrayFiltered";
import type Lambda        from "../../Types/Lambda";
import type Predicate     from "../../Types/Predicate";

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
  */
export default function filter<Is, Value>(call: Predicate<Is, Value>): <Values extends readonly Value[]>(values: Values) => ArrayFilter<Values, Is>;
export default function filter<Value>(call: Lambda<any, Value>): <Values extends readonly Value[]>(values: Values) => ArrayFiltered<Values>;
