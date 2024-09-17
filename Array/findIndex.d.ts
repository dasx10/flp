import type ArrayIndex from "../Types/ArrayIndex";
import type ArrayIndexOf from "../Types/ArrayIndexOf";

/**
  * @example
  * ```
  * findIndex(x => x > 2)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 2
  * findIndex(x => x === 0)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // -1
  * ```
  * @description Returns the index of the first element that satisfies the predicate
  * @function
  * @name findIndex
  * @param {function}
  * @returns {function}
  */
export default function findIndex<Predicate, X>(call: (x: X) => x is Predicate): <Values extends readonly X[]>(values: Values) => ArrayIndexOf<Values, Predicate>;
export default function findIndex<X>(call: (x: X) => any): <Values extends readonly X[]>(values: Values) => ArrayIndex<Values> | -1;
