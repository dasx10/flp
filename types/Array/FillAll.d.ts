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

/**
  * @description fill the array with new values
  * @example
  * ```typescript
  * ArrayFillAll<[1, 2, 3], "test"> // ["test", "test", "test"]
  * ArrayFillAll<number[], "test"> // "test"[]
  * ```
  */
type ArrayFillAll<Values extends readonly any[], Value> = Values extends readonly [any, ...infer Rest]
  ? [Value, ...ArrayFillAllRight<Rest, Value>]
  : Values extends readonly [...infer Rest, any]
    ? [...ArrayFillAllLeft<Rest, Value>, Value]
    : Values extends readonly []
      ? []
      : Value[] | []
;

export default ArrayFillAll;
