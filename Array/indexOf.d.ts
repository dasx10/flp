import type ArrayIndexOf from "../Types/ArrayIndexOf";
export default function indexOf<Value>(value: Value): <Values extends readonly any[]>(values: Values) => ArrayIndexOf<Values, Value>
