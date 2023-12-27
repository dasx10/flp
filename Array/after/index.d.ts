type ArrayAfter<Values extends readonly any[]> = Values extends readonly [...infer Rest, infer First]
  ? [First] | [...ArrayAfter<Rest>, First]
  : Values extends readonly []
    ? []
    : [] | Values
  ;

/**
  * @function
  * @name after
  * @description Creates an array of values that satisfy the condition.
  * @param {number} index
  * @returns {Function}
  * @example
  * ```
  * var numbers     = [1, 2, 3, 4, 5];
  * after(1)(numbers); // [2, 3, 4, 5];
  * after(2)(numbers); // [3, 4, 5];
  * after(3)(numbers); // [4, 5];
  * after(4)(numbers); // [5];
  * after(5)(numbers); // [];
  * after(6)(numbers); // [];
  * ```
  */
export default function after<Index extends number>(index: Index): <Values extends readonly any[]>(values: Values) => ArrayAfter<Values, Index>;
export default function after(index: number): <Value>(value: readonly Value[]) => Value[];
