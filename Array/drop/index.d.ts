export default function drop<Min extends number>(min: Min): <Max extends number>(max: Max) => <Values extends readonly any[]>(values: Values) => Values[number][];
