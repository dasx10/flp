import type Lambda from "../../types/Lambda";
export default function mapIs<Value extends Record<PropertyKey, any>>(value: Value): Record<keyof Value, Lambda<boolean, any>>;
