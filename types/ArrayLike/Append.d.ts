import type ArrayLike   from "./index.d.ts";
import type ArrayAppend from "../Array/Append.d.ts";
import type Chars       from "../String/Chars";

type ArrayLikeAppend<Values extends ArrayLike<any>, AppendValue> = Values extends Array<any>
  ? ArrayAppend<Values, AppendValue>
  : Values extends string
    ? ArrayAppend<Chars<Values>, AppendValue>
    : Values extends ArrayLike<infer Value>
      ? readonly [...Value[], AppendValue] | readonly [AppendValue]
      : never
;

export default ArrayLikeAppend;
