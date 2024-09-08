import type { Deep } from "./deep";
export default function dir<Keys extends readonly (string|number)[]>(keys: Keys): <Value>(value: Deep<Value, Keys>) => Value;
