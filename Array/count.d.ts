import type ArrayIndex from "../Types/ArrayIndex";
export default function count<Value>(call: (value: Value) => any): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values> | Values['length'];
