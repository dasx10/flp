import type Index from "../types";

export default function countOfFrom(create: 0)
   : <Value>(value: Value)
  => <Values extends readonly any[]>(values: Values)
  => Index<Values>

export default function countOfFrom<From extends number>(create: number)
    : <Value>(value: Value)
  => {
    (values: readonly any[]): number;
    (values: []): From;
  }
;
