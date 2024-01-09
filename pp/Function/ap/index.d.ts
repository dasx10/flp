export default function ap<Return, Value>(call: (value: Value) => Return, value: Value): Return;
