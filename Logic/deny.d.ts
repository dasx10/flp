import type Lambda from "../Types/Lambda";
export default function deny<Value>(call: Lambda<any, Value>): boolean;
