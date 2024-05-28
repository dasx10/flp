export default function unless<Value>(test: (value: Value) => any): <Return>(call: (value: Value) => Return) => (value: Value) => Return | Value;
