import type IterateCall from "../types/IterateCall";

export default function onMap<Return, Values extends readonly any[]>(call: (values: Values) => Return)
   : <Value>(call: IterateCall<Values[number], Value>)
  => (values: readonly Value[]) => Return[];
