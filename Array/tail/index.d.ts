export type ArrayTail<Values extends readonly any[]> = Values extends readonly [any, ...infer Tail]
  ? Tail
  : Values extends readonly []
    ? []
    : Values[number][] | [];

export default function tail<Values extends readonly any[]>(values: Values): ArrayTail<Values>;
