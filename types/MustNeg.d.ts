type MustNeg<Value extends number> = number extends Value
  ? Value
  : `${Value}` extends `-${number}`
    ? Value
    : never
;

export default MustNeg;
