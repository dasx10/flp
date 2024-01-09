import type Lambda from "../../../../types/Lambda";

type Index2 = 0 | 1;

declare var _sort2: <
  Values extends readonly any[] = readonly [any, any],
  Call   extends Lambda<Values[number], Lambda<Values[number], any>> = Lambda<Values[Index2], Lambda<Values[Index2], number>>,
>(values: Values, call: Call) => Values | [Values[1], Values[0]];

export default _sort2;
