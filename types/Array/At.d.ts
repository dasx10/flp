import type ArrayValue   from "./Value";
import type ArrayReverse from "./Reverse";
import type ArrayNth     from "./Nth";

type ArrayAt<Values extends readonly any[], Index extends number> = number extends Index
  ? ArrayValue<Values> | void
  : `${Index}` extends `-${infer AbsoluteIndex}`
    ? Values extends readonly [...any, any]
      ? ArrayNth<[never, ...ArrayReverse<Values>], AbsoluteIndex>
      : ArrayValue<Values> | void
    : Values[Index]
;

export default ArrayAt;
