import type IterateCall from "../types/IterateCall";
export default function reject<Value>(call: IterateCall<any, Value>): (values: Value[]) => Value[];
