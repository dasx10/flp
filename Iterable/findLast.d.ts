import type Lambda from "../Types/Lambda";
export default function findLast<Value>(call: Lambda<any, Value>): Lambda<Value | undefined, Iterable<Value>>;
