type Unsigned<Value extends number> = number extends Value
  ? Value
  : `${Value}` extends `-${string}`
    ? never
    : Value extends number
      ? Value
      : never
;

export default Unsigned;
