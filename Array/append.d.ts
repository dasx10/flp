export type Append<Values extends readonly any[], X> = readonly [...Values, Y];

/**
  * @example
  * ```javascript
  * append(1)([1, 2, 3]); // [1, 2, 3, 1]
  * append(1)([]); // [1]
  * append([1])([1, 2, 3]); // [1, 2, 3, [1]]
  * ```
  * @description Append a value to an array
  * @param {*} y
  * @returns {function}
  */
export default function append<Y>(y: Y): <Values extends readonly any[]>(x: Values) => Append<Values, Y>;
export var then: (resolve: (value: typeof append) => any) => any;
