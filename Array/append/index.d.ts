export default function append<Value>(value: Value): <Values extends readonly any[]>(values: Values) => [...Values, Value];
