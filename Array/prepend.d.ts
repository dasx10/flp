export type Prepend<Values extends readonly any[], X> = readonly [X, ...Values];

/**
  * @example
  * ```javascript
  * prepend(1)([1, 2, 3]); // [1, 1, 2, 3]
  * prepend(1)([]); // [1]
  * prepend([1])([1, 2, 3]); // [[1], 1, 2, 3]
  * ```
  * @description Prepend a value to an array
  * @param {*} x
  * @returns {function}
  * @name prepend
  */
export default function prepend<X>(x: X): <Values extends readonly any[]>(values: Values) => Prepend<Values, X>;
export var then: (resolve: (value: typeof prepend) => any) => any;
