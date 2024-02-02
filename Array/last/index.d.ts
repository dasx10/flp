export type ArrayLast<Values extends readonly any[]> = Values extends readonly [...any[], infer Last]
  ? Last
  : Values extends readonly []
    ? void
    : Values[number] | void;

export default function last<Values extends readonly any[]>(values: Values): ArrayLast<Values>;
