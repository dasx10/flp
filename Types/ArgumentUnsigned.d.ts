type ArgumentUInt<Value extends number> = number extends Value
  ? Value
  : `${Value}` extends `-${string}`
    ? never
    : Value
;

export default ArgumentUInt;
