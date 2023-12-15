import type Index       from "../types";
import type IterateCall from "../types/IterateCall";
export default function rejectIndex<Value>(call: IterateCall<Value>): <Values extends readonly Value[]>(values: Values) => Index<Values>[];
