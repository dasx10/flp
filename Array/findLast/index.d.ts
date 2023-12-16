import type IterateCall from "../types/IterateCall";
import type { FindIndex } from "../findIndex";
export default function findLast<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => FindIndex<Values>;
