import type { Find } from "./find";

/**
  * @example
  * ```javascript
  * var xIs5 = ({ x }) => x === 5;
  * findLast(xIs5)([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5, y: 5 }, { x: 5 }]); // { x: 5 };
  * findLast(xIs5)([{ x: 1 }, { x: 5 }, { x: 3 }, { x: 4 }, { x: 5, y: 5 }, { x: 6 }]); // { x: 5, y: 5 };
  * findLast(xIs5)([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 6 }]); // undefined;
  * findLast(xIs5)([]); // undefined;
  * ```
  * @description Returns the last value that satisfies the condition.
  * @function
  * @name findLast
  * @param {Function} call
  * @returns {Function}
  */
export default function findLast<Is, X>(call: (x: X) => x is Is): <Values extends readonly X[]>(values: Values) => Find<Values, Is>;
export default function findLast<X>(call: (x: X) => any): <Values extends readonly X[]>(values: Values) => Find<Values>;

export const then: (resolve: (module: typeof findLast) => any) => any;
