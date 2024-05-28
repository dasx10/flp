import type RecordDeep from "../Types/RecordDeep";
import type RecordPath from "../Types/RecordPath";
export default function path<Keys extends readonly PropertyKey[]>(keys: Keys): <Value extends RecordDeep<Keys, any>>(value: Value) => RecordPath<Keys, Value>;
