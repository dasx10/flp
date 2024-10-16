import type ArrayAppend from "../types/Array/Append";

type ArrayAppending<AppendValue> = <Values extends readonly any[]>(values: Values) => ArrayAppend<Values, AppendValue>;

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
  * @name append
  * @alias push
  */
export default function append<Value>(value: Value): ArrayAppending<Value>;
export var then: (resolve: (arrayAppend: typeof append) => any) => any;
