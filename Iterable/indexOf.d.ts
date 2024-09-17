export type IndexOf<Value, Values extends Iterable<any>> = Values extends readonly any[]
  ? Values extends readonly []
    ? -1
    : Values extends readonly [...infer Head, infer Last]
      ? Last extends Value
        ? Head["length"] | IndexOf<Value, Head>
        : Value extends Last
          ? Head["length"] | IndexOf<Value, Head>
          : -1 | IndexOf<Value, Head>
      : Value extends Last
        ? Head["length"] | IndexOf<Value, Head>
        : -1 | IndexOf<Value, Head>
    : number
;
