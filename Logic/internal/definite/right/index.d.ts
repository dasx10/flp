export default function _definiteRight<Value, Next>(value: Value, next: Next, call: (next: Next, value: Value) => any): Value | Next;
