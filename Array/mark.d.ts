export default function mark<Value>(value: Value): <Values extends readonly *[]>(values: Values) => Values | readonly [...Values, Value];

