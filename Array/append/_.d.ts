export default function append_<Values extends readonly any[]>(values: Values): <Value>(value: Value) => [...Values, Value];
