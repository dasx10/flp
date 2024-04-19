import type ArrayIndex from "./ArrayIndex";

type ArrayNth<Values extends readonly any[], Index extends ArrayIndex<Values>> = number extends Index
  ? Values[Index] | undefined
  : number extends ArrayIndex<Values>
    ? Values[number] | undefined
    : Values[Index]
;

export default ArrayNth;
