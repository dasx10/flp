import type IterateCall from "../types/IterateCall";
export default function rejectRight<Value>(call: IterateCall<any, Value>): (values: Value[]) => Value[];
