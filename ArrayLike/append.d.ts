import ArrayLikeAppend from "./types/Append";

type ArrayLikeAppending<Value> = <Values extends ArrayLike<any>>(values: Values) => ArrayLikeAppend<Values, Value>;


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
export default function append<AppendValue>(value: AppendValue): ArrayLikeAppending<AppendValue>;

export var then: (resolve: (arrayLikeAppend: typeof append) => any) => any;
