export type Reverse<Values extends readonly any[]> = Values extends readonly [infer Value, ...infer Tail]
  ? readonly [...Reverse<Tail>, Value]
  : Values extends readonly []
    ? readonly []
    : Values extends readonly(infer Value)[]
      ? readonly Value[] | []
      : never[];

export function reverse<Values extends readonly any[]>(values: Values): Reverse<Values>;
