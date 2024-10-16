type ArrayFindLast<
  Values extends readonly any[],
  Is,
  _test = Is,
> = Values extends readonly []
  ? void
  : Values extends readonly [...infer Head, infer Last]
    ? Last extends Is
      ? Last
      : Is extends Last
        ? readonly Last | ArrayFindLast<Head, _test, _test>
        : ArrayFindLast<Head, _test, _test>
          : Values extends readonly [infer First, ...infer Tail]
            ? First extends Is
              ? First | ArrayFindLast<Tail, _test, _test>
              : Is extends First
                ? Is | ArrayFindLast<Tail, _test, _test>
                : ArrayFindLast<Tail, _test, _test>
      : Values extends readonly (infer Value)[]
        ? Value extends Is
          ? Value
          : Is extends Value
            ? Is | void
            : void
        : never
;

export default ArrayFindLast;
