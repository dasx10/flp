import type Lambda from "../Types/Lambda";
export default function forEachRight<Value>(call: Lambda<any, Value>): <Values extends readonly Value[]>(values: Values) => Readonly<Values>;
