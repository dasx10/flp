import type IterateCall from "../types/IterateCall";

export default function findLast<
  Value,
  Values extends readonly Value[] = readonly Value[],
>(call: IterateCall<any, Value>): (values: Values) => FindIndex<Values>;
