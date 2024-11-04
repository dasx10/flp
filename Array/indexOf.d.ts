import type ArrayIndexOf from "../types/Array/IndexOf.d.ts";

/**
  * @example
  * ```
  * indexOf(3)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 2
  * indexOf(0)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // -1
  * ```
  */
export default function indexOf<Value>(value: Value): <Values extends readonly any[]>(values: Values) => ArrayIndexOf<Values, Value>
