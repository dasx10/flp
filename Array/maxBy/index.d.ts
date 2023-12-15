import type IterateCall from "../types/IterateCall";
export default function maxBy<Return extends number, Value>(call: IterateCall<Return, Value>): (values: readonly Value[]) => Return;
