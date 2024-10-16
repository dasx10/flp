type ArrayChanks<Values extends readonly any[]> = Values extends readonly [infer First, ...infer Tail]
  ? readonly [First] | readonly [First, ...ArrayChanks<Tail>] | ArrayChanks<Tail>
  : Values extends readonly []
    ? []
    : Values extends readonly (infer Value)[]
      ? readonly [] | readonly Value[]
      : never
;

export default ArrayChanks;
