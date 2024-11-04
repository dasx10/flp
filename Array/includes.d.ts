import type Int from "../types/Number/Int.d.ts";

type Includes<Values, Index, Value> = Values extends readonly []
  ? false
  : boolean
;

export default function includes<Index extends number>(index: Int<Index>): <Value>(value: Value) => <Values extends readonly any[]>(values: Values) => Includes<Values, Index, Value>;
