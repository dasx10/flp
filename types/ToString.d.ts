type ToString<Value> = Value extends string
  ? Value
  : Value extends number | boolean | null | undefined | bigint
    ? `${Value}`
    : Value extends { toString(): infer Result }
      ? `${Result}`
      : string
;

export default ToString;
