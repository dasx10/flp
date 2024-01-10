type ArrayValue<Values extends readonly any[]> = Values extends readonly (infer Value)[]
  ? Value
  : Values extends readonly []
    ? undefined
    : Values extends ArrayLike<infer Value>
      ? Value
      : unknown
;

export default ArrayValue;
