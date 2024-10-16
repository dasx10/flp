import type Uint from "../Number/Uint.js";
import type ArrayLike from "./index.d.ts";

type ArrayLikeLength<Values extends ArrayLike<any>> = Values extends ArrayLike<any>
  ? Uint<Values["length"]>
  : never
;

export default ArrayLikeLength;
