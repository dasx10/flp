export default function after<Index extends number>(index: Index): <Values extends readonly any[]>(values: Values) => (Values[number])[];
