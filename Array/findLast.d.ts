import ArrayFindLast from "../types/Array/FindLast";

export type FindingLast<Value, Is = Value> = <Values extends readonly Value[]>(values: Values) => ArrayFindLast<Values, Is>;

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
export default function findLast<Is, X>(call: (x: X) => x is Is): FindingLast<X, Is>;
export default function findLast<X>(call: (x: X) => boolean): FindingLast<X, X>;

export const then: (resolve: (module: typeof findLast) => any) => any;
