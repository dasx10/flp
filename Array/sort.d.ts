type Sort<Values extends readonly any[], Value = Values[number]> = Values extends readonly [any, ...infer Tail]
  ? readonly [Value, ...Sort<Tail, Value>]
  : Values extends readonly []
    ? readonly []
    : never[]
;

export default function sort<Value>(call: (y: Value) => (x: Value) => number): <Values extends readonly Value[]>(values: Values) => Sort<Values>;
// declare var then: (resolve: (value: typeof sort) => any) => any;
