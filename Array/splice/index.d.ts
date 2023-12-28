export default function splice<Min extends number>(min: Min): <Max extends number>(max: Max) => <Values extends readonly any[]>(values: Values) => Values[number][];
