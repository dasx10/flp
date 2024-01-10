type ArrayFilter<Values extends readonly any[]> = Values extends readonly [infer First, ...infer Rest]
  ? [] | [First] | [First, ...ArrayFilter<Rest>] | ArrayFilter<Rest>
  : Values extends readonly [...infer Rest, infer Last]
    ? [] | [Last] | [...ArrayFilter<Rest>, Last] | ArrayFilter<Rest>
    : Values extends readonly []
      ? []
      : Values | []
;

export default ArrayFilter;
