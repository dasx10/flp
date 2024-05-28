export default function select<Indexes extends number[]>(indexes: Indexes): <Values extends readonly any[]>(values: Values) => Values[Indexes[number]][];
