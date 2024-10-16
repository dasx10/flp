import type ArrayLike from "./index.d.ts";
import type ArrayAt   from "../Array/At.d.ts";

type ArrayLikeAt<
  Values extends ArrayLike<any>,
  Index  extends number,
> = Values extends Array<any>
  ? ArrayAt<Values, Index>
  : Values extends ArrayLike<infer Value>
    ? Value | void
    : never
;

export default ArrayLikeAt;
