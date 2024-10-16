import type ArrayFilter       from "../types/Array/Filter";
type Filtering<X, Is = X> = <Values extends readonly X[]>(value: Values) => ArrayFilter<Values, Is>;

/**
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
  * @description Creates an array of values that satisfy the condition.
  * @function
  * @name filter
  * @param {Function} call
  * @returns {Function}
  * @see {@link Array.prototype.filter}
  */
export default function filter<Is, Value>(call: (x: Value) => x is Is): Filtering<Value, Is>;
export default function filter<Value>(call: (value: Value) => any): Filtering<Value, Value>;

export var then: (resolve: (value: typeof filter) => any) => any;
