type NumberExcludeNegative<Value extends number> = number extends Value
  ? number
  : `${Value}` extends `-${infer _}`
    ? _ extends `${number}`
      ? never
      : Value
    : Value
;

export default NumberExcludeNegative;
