type ArrayMustValue<Values extends readonly any[]> = Values extends readonly [infer Value, ...infer Tail]
  ? Value | ArrayMustValue<Tail>
  : never
;

type ArrayValue<Values extends readonly any[]> = Values extends readonly [infer Value, ...infer Tail]
  ? Value | ArrayMustValue<Tail>
  : Values extends readonly []
    ? undefined
    : Values extends readonly (infer Value)[]
      ? Value
      : unknown
;

export default ArrayValue;
