export type Break = readonly [
  any, any, any, any, any, any, any, any, any, any, any, any, any, any, any,
  ...any[],
];

type ArrayIndexOf<
  Values extends readonly any[],
  Is,
  _test                             = Is,
    _checked extends readonly any[] = readonly []
> = Values extends readonly []
  ? -1
  : Values extends Break
    ? number
    : Values extends readonly [infer First, ...infer Tail]
      ? First extends Is
        ? _checked["length"]
        : Is extends First
          ? _checked["length"] | ArrayIndexOf<Tail, _test, _test, [..._checked, First]>
          : ArrayIndexOf<Tail, _test, _test, [..._checked, First]>
      : Values extends readonly [...infer Head, infer Last]
        ? Last extends Is
          ? _checked["length"] | ArrayIndexOf<Head, _test, _test, Head>
          : Is extends Last
            ? _checked["length"] | ArrayIndexOf<Head, _test, _test, Head>
            : ArrayIndexOf<Head, _test, _test, _checked>
      : Values extends readonly (infer Value)[]
        ? Value extends Is
          ? _checked["length"] | -1
          : Is extends Value
            ? _checked["length"] | -1
            : -1
      : -1
;

export default ArrayIndexOf;
