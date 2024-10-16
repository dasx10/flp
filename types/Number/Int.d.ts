type Int<Value extends number> = number extends Value
  ? number
  : `${Value}` extends `${number}.${number}`
    ? never
    : Value
;

export default Int;
