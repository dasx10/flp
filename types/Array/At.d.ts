import type ArrayNth     from "./Nth";
import type ArrayReverse from "./Reverse";

type ArrayAt<Values extends readonly any[], Index extends number> = number extends Index
  ? void | Values[Index]
  : `${Index}` extends `-${infer Key}`
    ? Values extends readonly [...any[]]
      ? ([void, ...ArrayReverse<Values>])[Key]
      : Next[Key] | void
    : ArrayNth<Index, Values>
  ;

export default ArrayAt;
