import type Index from "../../types";
export type ArrayRemove<Values extends readonly any[], Key extends Index<Values>> = Values[number][];
export default function _remove<Values extends readonly any[], Key extends Index<Values>>(values: Values, index: Index): ArrayRemove<Values, Key>;
