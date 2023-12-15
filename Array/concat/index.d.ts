export default function concat<Next extends readonly any[]>(next: Next): <Values extends readonly any[]>(values: Values) => [...Values, ...Next];
