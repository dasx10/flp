type ArgumentNegative<Value extends number> = number extends Value
  ? Value
  : `${Value}` extends `-${string}`
    ? Value
    : never
;

export default ArgumentNegative;
