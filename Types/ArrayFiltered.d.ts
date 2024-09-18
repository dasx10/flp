import type ArrayMaybePrepend from "./ArrayMaybePrepend";

type TupleFiltered<Values extends readonly any[]> = Values extends readonly [infer First, ...infer Tail]
  ? readonly [First] | ArrayMaybePrepend<TupleFiltered<Tail>, First>
  : readonly []
;

type ArrayFiltered<Values extends readonly any[]> = Values extends readonly [infer First, ...infer Tail]
  ? readonly [First] | ArrayMaybePrepend<TupleFiltered<Tail>, First>
  : Values extends readonly []
    ? readonly []
    : Values
;

export default ArrayFiltered;
