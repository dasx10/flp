import type IterateCall from "../types/IterateCall";
export default function reduceAdapterIndividualBy(reduce: any): <Value>(call: IterateCall<Value>) => <Values extends readonly Value[]>(values: Values) => Values[number][] | Values;
