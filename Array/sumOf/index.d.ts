export default function sumOf<Value extends number>(value: Value): <Values extends readonly number[]>(values: Values) => number;
