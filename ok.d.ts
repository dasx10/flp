export default function ok<Return, Value>(call: (value: Value) => Return): (value: Value) => Return | Value;
export var then = (resolve: (value: typeof ok) => any) => any;
