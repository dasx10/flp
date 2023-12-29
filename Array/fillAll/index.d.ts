type ArrayFillAllRight<Values extends readonly any[], Value> = Values extends readonly [any, ...infer Rest]
  ? [Value, ...ArrayFillAllRight<Rest, Value>]
  : Values extends readonly []
    ? []
    : Value[] | []
;

type ArrayFillAllLeft<Values extends readonly any[], Value> = Values extends readonly [...infer Rest, any]
  ? [...ArrayFillAllLeft<Rest, Value>, Value]
  : Values extends readonly []
    ? []
    : Value[] | []
;

export type ArrayFillAll<Values extends readonly any[], Value> = Values extends readonly [...infer Rest]
  ? ArrayFillAllLeft<ArrayFillAllRight<Values, Value>, Value>
  : Values extends readonly []
    ? []
    : Value[] | []
    ;

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
export default function fillAll<Value>(value: Value): <Values extends readonly any[]>(values: Values) => [...Values, Value];
