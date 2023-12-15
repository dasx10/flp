export type ArrayNth<Index extends number, Values extends readonly any[]> = number extends Index
  ? void | Values[Index]
  : Values extends readonly [...any[]]
    ? Values[Index]
    : Values[Index] | void
;

export default function nth<Index extends number>(index: Index): <Values extends readonly any[]>(values: Values) => Values[Index];
