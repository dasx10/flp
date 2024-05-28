import type ArrayIndex from "../Types/ArrayIndex";
import type Lambda from "../Types/Lambda";
export default function findLastIndexMax<Value>(call: Lambda<any, Value>): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values> | -1;
