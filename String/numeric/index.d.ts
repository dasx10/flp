type _Numeric<Value extends string> = Value extends `${infer Char}${infer Next}`
  ? Char extends `${number}`
    ? `${Char}${Numeric<Next>}`
    : Numeric<Next>
  : Value extends ""
    ? ""
    : `${number}` | "";

export type Numeric<Value extends string = string> = string extends Value
  ? `${number}` | ""
  : _Numeric<Value>;

declare var numeric: <Value extends string>(value: Value) => Numeric<Value>;
export default numeric;
