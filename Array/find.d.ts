import ArrayFind from "../types/Array/Find";

export type Finding<X, Is = X> = <Values extends readonly X[]>(value: Values) => ArrayFind<Values, Is>;

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
export default function find<Is, X>(call: (x: X) => x is Is): Finding<X, Is>;
export default function find<X>(call: (x: X) => boolean): Finding<X, X>;

export var then: (resolve: (value: typeof find) => any) => any;
