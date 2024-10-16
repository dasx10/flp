import type Uint            from "../Number/Uint";
import type ArrayLike       from "./index.d.ts";
import type ArrayIndex      from "../Array/Index.d.ts";
import type ArrayLikeLength from "../ArrayLike/Length.d.ts";

type ArrayLikeIndex<Values extends ArrayLike<any>> = Values extends Array<any>
  ? ArrayIndex<Values>
  : Values extends ArrayLike<any>
    ? number extends Values
      ? Uint<keyof Values & number>
      : Exclude<Uint<keyof Values & number>, ArrayLikeLength<Values>>
    : never
;

export default ArrayLikeIndex;
