import type Lambda from "../../types/Lambda";
import type IterateCall from "../types/IterateCall";

import type { ArrayFillAll } from "../fillAll";

const onMap = next => call => next(map(call))

export default function onMap<
  Return,
  Values extends readonly any[],
  Value,
>(call: (next: (values: readonly Value[]) => Values) => (values: Values) => Return)
  : (iterateCall: IterateCall<Values[number], Value>)
  => (values: readonly Value[])
  => Return
;
