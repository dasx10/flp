import type Index         from "../../types/Index";
import type RequiredLeft  from "../types/RequiredLeft";
import type RequiredRight from "../types/RequiredRight";

export type ArrayLength<Values extends readonly any[]> = number extends Values["length"]
  ? Values extends readonly [any, ...any]
    ? RequiredLeft<Values>["length"] | Index
    : Values extends readonly [...any, any]
      ? RequiredRight<Values>["length"] | Index
      : 0 | Index
  : Values extends readonly any[]
    ? Values["length"]
    : number
  ;

/**
  * @constant {(values: readonly any[]) => number}
  */
export default function length<Values extends readonly any[]>(values: Values): ArrayLength<Values>;
export default function length(values: readonly any[]): number;
