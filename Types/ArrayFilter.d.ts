import type ArrayMaybePrepend from "./ArrayMaybePrepend";
import type TupleFilter       from "./TupleFilter";

type ArrayFilter<Values extends readonly any[], Is> = Values extends readonly[infer First, ...infer Tail]
  ? First extends Is
    ? ArrayMaybePrepend<TupleFilter<Tail, Is>, First>
    : Is extends First
      ? ArrayMaybePrepend<TupleFilter<Tail, Is>, First>
      : TupleFilter<Tail, Is>
  : Values extends readonly[]
    ? readonly[]
    : Values
;


export default ArrayFilter;
