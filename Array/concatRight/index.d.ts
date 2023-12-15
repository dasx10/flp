export default function concatRight<Next extends readonly any[]>(next: Next): <Values extends readonly any[]>(values: Values) => [...Next, ...Values];
