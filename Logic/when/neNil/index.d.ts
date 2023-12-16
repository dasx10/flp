export default function whenNeNil<Value, Return>(call: (value: Value) => Return): (value: Value) => Return | Value;
