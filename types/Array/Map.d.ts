type ArrayMapRight<Values extends readonly any[], Value> = Values extends readonly []
  ? readonly []
  : Values extends readonly [...infer Head, any]
    ? readonly [...ArrayMapRight<Head, Value>, Value]
    : Values extends readonly [any, ...infer Tail]
      ? readonly [Value, ...ArrayMapLeft<Tail, Value>]
      : Values extends readonly (any)[]
        ? readonly Value[] | readonly []
        : never
;

type ArrayMapLeft<Values extends readonly any[], Value> = Values extends readonly []
  ? readonly []
  : Values extends readonly [any, ...infer Tail]
    ? readonly [Value, ...ArrayMapLeft<Tail, Value>]
    : Values extends readonly [...infer Head, any]
      ? readonly [...ArrayMapRight<Head, Value>, Value]
      : Values extends readonly (any)[]
        ? readonly Value[]
        : never
;

type ArrayMap<Values extends readonly any[], Value> = Values extends readonly []
  ? readonly []
  : Values extends readonly [any, ...infer Tail]
    ? readonly [Value, ...ArrayMapLeft<Tail, Value>]
    : Values extends readonly [...infer Head, any]
      ? readonly [...ArrayMapRight<Head, Value>, Value]
      : Values extends readonly (any)[] | readonly []
        ? readonly Value[]
        : never
;

export default ArrayMap;
