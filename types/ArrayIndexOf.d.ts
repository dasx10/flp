import type ArrayIndex from "./ArrayIndex";

type ArrayIndexOf<Values extends readonly any[], Value> = Values extends readonly [...infer Head, infer Last]
  ? Last extends Value
    ? Value extends Last
      ? Head['length'] | Exclude<ArrayIndexOf<Head, Value>, -1>
      : Head['length'] | ArrayIndexOf<Head, Value>
    : Value extends Last
      ? Head['length'] | ArrayIndexOf<Head, Value>
      : ArrayIndexOf<Head, Value>
  : Valeus extends readonly []
    ? -1
    : Values extends readonly (infer Element)[]
      ? Element extends Value
        ? number
        : Value extends Element
          ? number
          : -1
      : -1
;

export default ArrayIndexOf;
