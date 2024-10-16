type ArrayFind<
  Values extends readonly any[],
  Is,
  _test = Is,
> = Values extends readonly []
  ? void
  : Values extends readonly [infer First, ...infer Tail]
    ? First extends Is
      ? First
      : Is extends First
        ? readonly Is | ArrayFind<Tail, _test, _test>
        : ArrayFind<Tail, _test, _test>
          : Values extends readonly [...infer Head, infer Last]
            ? Last extends Is
              ? Last | ArrayFind<Head, _test, _test>
              : Is extends Last
                ? Is | ArrayFind<Head, _test, _test>
                : ArrayFind<Head, _test, _test>
      : Values extends readonly (infer Value)[]
        ? Value extends Is
          ? Value
          : Is extends Value
            ? Is | void
            : void
        : never
;

export default ArrayFind;
