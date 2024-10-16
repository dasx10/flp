type TuppleFillAllRight<Values extends readonly any[], Value> = Values extends readonly [any, ...infer Tail]
  ? readonly [Value, ...TuppleFillAllRight<Tail, Value>]
  : Values extends readonly []
    ? Values
    : readonly Value[] | []
;

type TuppleFillAllLeft<Values extends readonly any[], Value> = Values extends readonly [...infer Tail, any]
  ? readonly [...TuppleFillAllLeft<Tail, Value>, Value]
  : Values extends readonly []
    ? Values
    : readonly Value[] | []
;

/**
  * @description fill the array with new values
  * @example
  * ```typescript
  * ArrayFillAll<[1, 2, 3], "test"> // ["test", "test", "test"]
  * ArrayFillAll<number[], "test"> // "test"[]
  * ```
  */
type ArrayFillAll<Values extends readonly any[], Value> = Values extends readonly [any, ...infer Tail]
  ? readonly [Value, ...TuppleFillAllRight<Tail, Value>]
  : Values extends readonly [...infer Tail, any]
    ? readonly [...TuppleFillAllLeft<Tail, Value>, Value]
    : Values extends readonly []
      ? Values
      : readonly Value[] | []
;

export default ArrayFillAll;
