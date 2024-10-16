import type ArrayValue from "./Value";

type ArrayNth<Values extends readonly any[], Index extends number> = number extends Index
  ? ArrayValue<Values> | void
  : `${Index}` extends `-${number}`
    ? void
    : Values extends (readonly [any, ...any[]] | readonly [...any, any])
      ? `${Index}` extends keyof Values
        ? Values[Index]
        : Values[Index] | void
      : Values[Index] | void
;

export default ArrayNth;
