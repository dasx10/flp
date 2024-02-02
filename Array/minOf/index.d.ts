export default function minOf<Value>(value: Value): <Values extends readonly any[]>(values: Values) => Value | Values[number];
