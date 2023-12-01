export default function map<Call extends (value: any) => any>(call: Call): <Values extends readonly any[]>(values: Values) => ReturnType<Call>[];
