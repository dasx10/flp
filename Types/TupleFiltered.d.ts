import type ArrayMaybePrepend from "./ArrayMaybePrepend";

type TupleFiltered<Values extends readonly any[]> = Values extends readonly [infer First, ...infer Tail]
  ? readonly [First] | ArrayMaybePrepend<TupleFiltered<Tail>, First>
  : readonly []
;

export default TupleFiltered;
