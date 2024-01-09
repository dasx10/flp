export default function _is<Value extends readonly any[], Next extends readonly any[]>(value: Value, next: Next): value is Next;
export default function _is<Value extends readonly any[], Next extends readonly any[]>(value: Value, next: Next): next is Value;
