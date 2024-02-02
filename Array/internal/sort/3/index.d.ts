import type Lambda from "../../../../types/Lambda";

type Index3 = 0 | 1 | 2;

declare var _sort3: <
  Values extends readonly any[] = readonly [any, any, any],
  Call   extends Lambda<Values[number], Lambda<Values[number], any>> = Lambda<Values[Index3], Lambda<Values[Index3], number>>,
>(values: Values, call: Call) => Values |
  [Values[0], Values[2], Values[1]] |
  [Values[1], Values[0], Values[2]] |
  [Values[1], Values[2], Values[0]] |
  [Values[2], Values[0], Values[1]] |
  [Values[2], Values[1], Values[0]] ;

export default _sort3;
