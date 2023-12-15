import type Lambda from "../../types/Lambda";
export default function onMapEq<Value extends Record<PropertyKey, any>>(value: Value): <Return>(call: Lambda<Return, Record<keyof Value, Lambda<boolean, any>>>) => Return;
