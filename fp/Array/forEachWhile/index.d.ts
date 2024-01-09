import type IterateCall from "../types/IterateCall";
export default function forEachWhile<Value>(test: IterateCall<any, Value>): (call: IterateCall<Value>) => <Values extends readonly Value[]>(values: Values) => Values;
