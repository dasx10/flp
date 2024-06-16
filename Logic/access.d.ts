export default function access<Return, Value>(call: (value: Value) => Return): (value: Value) => Return | Value;
