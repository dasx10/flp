type Length<Values extends readonly any[]> = Values extends Record<"length", infer Value>
  ? Value extends number
    ? Value
    : number
  : number
;

export default function len<Values extends readonly any[]>(values: Values): Length<Values>;
