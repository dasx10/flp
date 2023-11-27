import type { EQ } from "../internal/eq";
export default function eq<Next extends number>(next: Next): <Value extends number>(value: Value) => EQ<Value, Next>;
