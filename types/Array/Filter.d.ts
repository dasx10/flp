type ArrayFilter<
  Values extends readonly any[],
  Is,
  _test = Is,
> = Values extends readonly []
  ? readonly []
  : Values extends readonly [infer First, ...infer Tail]
    ? First extends Is
      ? readonly [First, ...ArrayFilter<Tail, _test, _test>]
      : Is extends First
        ? readonly [Is, ...ArrayFilter<Tail, _test, _test>] | ArrayFilter<Tail, _test, _test>
        : ArrayFilter<Tail, _test, _test>
          : Values extends readonly [...infer Head, infer Last]
            ? Last extends Is
              ? readonly [...ArrayFilter<Head, _test, _test>, Last]
              : Is extends Last
                ? readonly [...ArrayFilter<Head, _test, _test>, Is] | ArrayFilter<Head, _test, _test>
                : ArrayFilter<Head, _test, _test>
      : Values extends readonly (infer Value)[]
        ? Value extends Is
          ? readonly Value[]
          : Is extends Value
            ? readonly Is[] | readonly []
            : readonly[]
        : never
;

export default ArrayFilter;
