import type IterateCall from "../types/IterateCall";
export default function someRight<Value>(call: IterateCall<any, Value>): (values: readonly Value[]) => boolean;
