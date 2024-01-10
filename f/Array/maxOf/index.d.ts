export default function maxOf<Value>(value: Value): <Values extends readonly any[]>(values: Values) => Value | Values[number];
