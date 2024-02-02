export default function<Index extends number>(index: Index): <Value>(value: Value) => <Values extends readonly any[]>(values: Values) => (Values[number] | Value)[];
