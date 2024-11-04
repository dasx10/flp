type Uint<Value extends number> = number extends Value
  ? number
  : `${Value}` extends `${number}.${number}`
    ? never
    : `${Value}` extends `-${number}`
      ? never
      : Value extends number
        ? Value
        : never
;

export default Uint;
