type NumberExclude<Value extends number, Next extends number> = number extends Next
  ? Value
  : number extends Value
    ? Value
    : Exclude<Value, Next> extends never
      ? Value
      : Exclude<Value, Next>
    ;

export default NumberExclude;
