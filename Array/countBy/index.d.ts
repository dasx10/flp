import type IterateCall from "../types/IterateCall";
export default function countBy<Key extends PropertyKey, Value>(call: IterateCall<Key, Value>): <Values extends readonly Value[]>(values: Values) => Record<Key, number>;
