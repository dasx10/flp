export default function toArray<Values extends readonly any[]>(value: Values): Values;
export default function toArray<Value>(value: Value): Value extends readonly any[] ? Value : Value[];
