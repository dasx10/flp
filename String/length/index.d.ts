import type Index from "../../types/Index";

type _Length<Value extends string, Chars extends readonly string[]> = Value extends `${infer Char}${infer Next}`
  ? _Length<Next, [Char, ...Chars]>
  : Value extends ""
    ? Chars["length"]
    : Chars["length"] | Index;

export type Length<Value extends string> = string extends Value
  ? Index
  : _Length<Value, []>;

declare var length: <Value extends string>(value: Value) => Length<Value>;
export default length;
