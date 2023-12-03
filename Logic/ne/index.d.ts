export default function ne<Next>(next: Next): <Value>(value: Value) => value is Exclude<Value, Next>;
