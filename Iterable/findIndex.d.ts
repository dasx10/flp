import type Lambda from "../Types/Lambda";
export default function findIndex<Value>(call: Lambda<any, Value>): Lambda<number, Iterable<Value>>;
