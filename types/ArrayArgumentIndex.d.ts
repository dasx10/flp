import type ArrayIndex from "./ArrayIndex";

type ArrayArgumentIndex<Values extends readonly any[], Index extends number> = number extends Index
  ? Index
  : Index extends ArrayIndex<Values>
    ? Index
    : never
;

export default ArrayArgumentIndex;
