import type Index       from "../types";
import type IterateCall from "../types/IterateCall";
export default function countRight<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => Index<Values>;
