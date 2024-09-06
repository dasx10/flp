import type RecordDeep from "../Types/RecordDeep";
export default function dir<Keys extends readonly (string|number)[]>(keys: Keys): <Value>(value: RecordDeep<Keys, Value>) => Value;
