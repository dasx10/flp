import type Lambda from "../../Types/Lambda";
export default function sumBy<Value>(call: Lambda<number, Value>): <Values extends readonly Value[]>(values: Values) => number;
