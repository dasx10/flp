import type ArrayFiltered from "../../Types/ArrayFiltered";
import type Lambda from "../../Types/Lambda";
export default function reject<Value>(call: Lambda<any, Value>): <Values extends readonly Value[]>(values: Values) => ArrayFiltered<Values>;
