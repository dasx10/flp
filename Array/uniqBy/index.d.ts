import type IterateCall from "../types/IterateCall";
export default function uniqBy<Value>(call: IterateCall<Value>): <Values extends readonly Value[]>(values: Values) => Values[number][] | Values;
