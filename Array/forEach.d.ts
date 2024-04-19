import type Lambda from "../Types/Lambda";
export default function forEach<Value>(call: Lambda<any, Value>): <Values extends readonly Value[]>(values: Values) => Readonly<Values>;
