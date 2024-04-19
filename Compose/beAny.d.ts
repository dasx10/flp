import type Lambda from "../Types/Lambda";
export default function beAll<Value>(values: readonly Lambda<any, Value>): Lambda<boolean, Value>;
