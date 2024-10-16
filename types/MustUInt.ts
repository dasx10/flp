type ArgumentUInt<Value extends number> = number extends Value
  ? Value
  : `${Value}` extends `-${number}` | `${number}.${number}`
    ? never
    : Value
;

export default ArgumentUInt;
