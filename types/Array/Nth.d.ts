type ArrayNth<Values extends readonly any[], Index extends number> = number extends Index
  ? void | Values[Index]
  : Values extends readonly [...any[]]
    ? Values[Index]
    : Values[Index] | void
;

export default ArrayNth;
