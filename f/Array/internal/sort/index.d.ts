import type Lambda from "../../../../types/Lambda";
import type Index  from "../../../types/Index";

declare var _sort: <
  Values extends readonly any[] = readonly [any, any],
  Call   extends Lambda<Values[number], Lambda<Values[number], any>> = Lambda<Values[Index], Lambda<Values[Index], number>>,
>(values: Values, call: Call) => Values | Values[index][]

export default _sort;
