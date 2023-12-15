import type { ArrayNth }     from "../nth";
import type { ArrayReverse } from "../reverse";

export type ArrayAt<Index extends number, Values extends readonly any[]> = number extends Index
  ? void | Values[Index]
  : `${Index}` extends `-${infer Key}`
    ? Values extends readonly [...any[]]
      ? ([void, ...ArrayReverse<Values>])[Key]
      : Next[Key] | void
    : ArrayNth<Index, Values>
  ;

export default function at<Index extends number>(index: Index): <Values extends readonly any[]>(values: Values) => ArrayAt<Index, Values>;
