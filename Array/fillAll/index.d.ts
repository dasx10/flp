import type ArrayFillAll from "../../../types/Array/FillAll";

/**
  * @description Create a new array filled with the given value.
  * @function
  * @name fillAll
  * @param {Value} value
  * @returns {Function} `(values: Array) => Array<Value>`
  * @example
  * ```
  * fillAll(1)([1, 2, 3]); // [1, 1, 1]
  * fillAll("a")(["a", "b", "c"]); // ["a", "a", "a"]
  * ```
  */
export default function fillAll<Value>(value: Value): <Values extends readonly any[]>(values: Values) => ArrayFillAll<Values, Value>;
