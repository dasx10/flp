import type Lambda from "../../types/Lambda";
export default function onMapIs<Value extends Record<PropertyKey, any>>(value: Value): <Return>(call: Lambda<Return, Record<keyof Value, Lambda<boolean, any>>>) => Return;
