type ReverseLeft<Values extends readonly any[]> = Values extends readonly [infer First, ...infer Tail]
  ? readonly [...ReverseLeft<Tail>, First]
  : Values extends readonly []
    ? readonly []
    : Values extends readonly [...infer Head, infer Last]
      ? readonly [Last, ...ReverseRight<Head>]
      : Values extends readonly (infer Value)[] | readonly []
        ? readonly Value[]
        : never
;

type ReverseRight<Values extends readonly any[]> = Values extends readonly [...infer Head, infer Last]
  ? readonly [Last, ...ReverseRight<Head>]
  : Values extends readonly []
    ? readonly []
    : Values extends readonly [infer First, ...infer Tail]
      ? readonly [...ReverseLeft<Tail>, First]
      : Values extends readonly (infer Value)[]
        ? readonly Value[] | readonly []
        : never
;

type ArrayReverse<Values extends readonly any[]> = Values extends readonly []
  ? readonly []
  : Values extends readonly [infer First, ...infer Tail]
    ? readonly [...ReverseLeft<Tail>, First]
    : Values extends readonly [...infer Head, infer Last]
      ? readonly [Last, ...ReverseRight<Head>]
      : Values extends readonly (infer Value)[]
        ? readonly Value[]
        : never
;

export default ArrayReverse;
