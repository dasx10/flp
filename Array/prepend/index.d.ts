export default function prepend<Value>(value: Value): <Values extends readonly any[]>(values: Values) => [Value, ...Values];
