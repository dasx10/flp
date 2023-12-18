export default function whenNeNull<Value, Return>(call: (value: Value) => Return): (value: Value | null) => Return | Value;
