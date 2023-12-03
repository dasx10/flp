import type Index from "../types";
import type IterateCall from "../types/IterateCall";

export type FindIndex<Values extends readonly any[]> = Index<Values> | -1;
export default function findIndex<Value, Values extends readonly Value[]>(call: IterateCall<any, Value, Values>): (values: Values) => FindIndex<Values>;
export default function findIndex<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => FindIndex<Values>;
