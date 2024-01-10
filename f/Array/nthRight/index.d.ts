import type { ArrayReverse } from "../reverse";

export type ArrayNthRight<Index extends number, Values extends readonly any[]> = number extends Index
  ? void | Values[Index]
  : Values extends readonly [...any[]]
    ? ArrayReverse<Values>[Index]
    : Values[Index] | void
;

export default function nthRight<Index extends number>(index: Index): <Values extends readonly any[]>(values: Values) => ArrayNthRight<Index, Values>;
