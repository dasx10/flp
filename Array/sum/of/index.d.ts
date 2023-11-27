declare const sum: <Value extends number>(value: Value) => <Values extends readonly number[]>(values: Values) => number;
export default sum;
