import type ArrayIndex from "../../../types/Array/Index";

type _ArrayLimit<Values extends readonly any[], Length extends ArrayIndex<Values>> = Length extends Values["length"]
  ? Values
  : Values extends readonly [...infer Rest, any]
    ? _ArrayLimit<Rest, Length>
    : Values extends readonly any[]
      ? Values
      : Values[number][]
;

export type ArrayLimit<Values extends readonly any[], Length extends ArrayIndex<Values>> = number extends Length
  ? Values[number][]
  : number extends Values["length"]
    ? Values[number][]
    : Length extends ArrayIndex<Values>
      ? _ArrayLimit<Values, Length>
      : Values
;

export default function limit<Values extends readonly any[], Length extends ArrayIndex<Values>>(values: Values, length: Length): ArrayLimit<Values, Length>;
