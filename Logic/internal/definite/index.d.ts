export default function _definite<Value, Next>(value: Value, next: Next, call: (value: Value, next: Next) => any): Value | Next;
