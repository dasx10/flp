type Chars<Value extends string> = string extends Value
  ? readonly string[]
  : Value extends `${infer Char}${infer Tail}`
    ? readonly [Char, ...Chars<Tail>]
    : Value extends ""
      ? readonly []
      : never
;

export default Chars;
