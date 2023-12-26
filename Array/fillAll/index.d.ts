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

export default function fillAll<Value>(value: Value): <Values extends readonly any[]>(values: Values) => [...Values, Value];
