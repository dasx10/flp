export default function tap<Value>(call: (value: Value) => any): (value: Value) => Value;
