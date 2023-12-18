export default function binary<Return, Value, Next> (call: (next: Next) => (value: Value) => Return): (value: Value, next: Next) => Return
