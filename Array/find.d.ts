import type { Filter } from "./filter";

export type Find<Values extends readonly any[], Is = Values[number]> = Values extends readonly []
  ? undefined
  : (Filter<Values, Is>[number] & Is) | undefined
;

/**
  * @example
  * ```javascript
  * var is5 = (value) => value === 5;
  * find(is5)([1, 2, 3, 4, 5]); // 5;
  * find(is5)([1, 2, 5, 4, 5, 6]); // 5;
  * find(is5)([1, 2, 3, 4, 6]); // undefined;
  * find(is5)([]); // undefined;
  * ```
  * @description Returns the first value that satisfies the condition.
  * @function
  * @name find
  * @param {Function} call
  * @returns {Function}
  */
export default function find<Is, X>(call: (x: X) => x is Is): <Values extends readonly X[]>(values: Values) => Find<Values, Is>;
export default function find<X>(call: (x: X) => any): <Values extends readonly X[]>(values: Values) => Find<Values>;
