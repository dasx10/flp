export default function ne<Next extends readonly any[]>(next: Next): <Values extends readonly any[]>(values: Values) => values is Next;
