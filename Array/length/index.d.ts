import type Index         from "../../types/Index";
import type RequiredLeft  from "../Types/RequiredLeft";
import type RequiredRight from "../Types/RequiredRight";

export type Length<Values extends readonly any[]> = number extends Values["length"]
  ? Values extends readonly [any, ...any]
    ? RequiredLeft<Values>["length"] | Index
    : Values extends readonly [...any, any]
      ? RequiredRight<Values>["length"] | Index
      : 0 | Index
  : Values["length"];

/**
  * @constant {(values: readonly any[]) => number}
  */
declare var length: <Values extends readonly any[]>(values: Values) => Length<Values>;
export default length;
