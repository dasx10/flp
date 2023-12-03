import type { FindIndex } from "../findIndex";
import type Index from "../types";
import type IterateCall from "../types/IterateCall";
export default function findIndexMax<Value, Values extends readonly Value[]>(call: IterateCall<any, Value, Values>): (values: Values) => FindIndex<Values>;
export default function findIndexMax<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => FindIndex<Values>;
