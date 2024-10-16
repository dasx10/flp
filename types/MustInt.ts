type MustInt<Value extends number> = number extends Value
  ? Value
  : `${Value}` extends `${number}.${number}`
    ? never
    : Value
;

export default MustInt;
