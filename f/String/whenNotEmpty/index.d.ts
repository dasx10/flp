declare var whenNotEmpty: <Call extends (value: string) => any>(call: Call) => <Value extends string>(value: Value) => string extends Value
  ? ReturnType<Call> | Value | ""
  : Value extends `${any}`
    ? Value
    : Value extends ""
      ? ""
      : Value | ReturnType<Call> | "";

export default whenNotEmpty;
