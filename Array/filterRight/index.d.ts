import IterateCall from "../types/IterateCall";
export default function filterRight<Value>(call: IterateCall<Value>): <Values extends readonly Value[]>(values: Values) => Values[number][] | Values;
