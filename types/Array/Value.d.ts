type ArrayValue<Values extends readonly any[]> = Values extends readonly[]
  ? void
  : Values extends readonly (infer Value)[]
    ? Value
    : never
;

export default ArrayValue;
