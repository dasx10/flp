export default function away<Return, Value>(call: (value: Value) => Return): (value: Value) => Return | Value;
