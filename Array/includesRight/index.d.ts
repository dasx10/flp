export default function includesRight<Value>(value: Value): <Values extends readonly any[]>(values: Values) => boolean;
