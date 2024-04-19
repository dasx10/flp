import type ArrayIndex from "../Types/ArrayIndex";
import type ArrayIndexOf from "../Types/ArrayIndexOf";
import type Lambda from "../Types/Lambda";
export default function findIndex<Predicate, Value>(call: (value: Value) => value is Predicate): <Values extends readonly Value[]>(values: Values) => ArrayIndexOf<Values, Predicate>;
export default function findIndex<Value>(call: Lambda<any, Value>): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values> | -1;
