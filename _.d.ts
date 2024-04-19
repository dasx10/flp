import type Lambda from "./Types/Lambda";
export default function _<Value>(value: Value): <Return>(call: Lambda<Return, Value>) => Return;
